// pages/project/[slug].js
import Head from 'next/head'
import staticVars from '../../utils/staticvars'
import { motion } from "framer-motion"
import CTAButton from '../../components/ctabutton'
import { getSinglePost, getPosts } from '../../utils/posts';
import { useEffect } from 'react';


export async function getStaticPaths() {
  const posts = await getPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}



// PostPage page component
const PostPage = (props) => {

  function toggleZoom(element) {
    //console.log("toggle", element);
    element.classList.toggle("zoomedIn");
  }

  useEffect(() => {
    let imgs = document.querySelectorAll(".post img");
    imgs.forEach(element => element.onclick = function (element) { toggleZoom(element.target) });
  }, [props]);

  // Render post title and content in the page from props
  return (
    <div className="mainWrap">

      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={`${props.post.excerpt}`} />
      </Head>
      <motion.div id={`project-${props.post.slug}`} initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <div className="project" >
            <h1>{props.post.title}</h1>

            <div className="post" dangerouslySetInnerHTML={{ __html: props.post.html }} />

            <CTAButton label={"Let's work together"} />
          </div>
        </main>
      </motion.div>

    </div>
  )

};

export default PostPage;