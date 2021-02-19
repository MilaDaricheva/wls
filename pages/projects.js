import Head from 'next/head'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"
import CTAButton from '../components/ctabutton'
import { getPosts } from '../utils/posts';

const siteTitle = 'Our Projects'

export async function getStaticProps(context) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}

export default function Projects(props) {

  return (
    <div className="mainWrap">

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.div id="projects" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <h1>
            {siteTitle}
          </h1>

          <ul>
            {props.posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          
          <div className="pushEffWrapper">
            <div className="pushEffect"><CTAButton label={"Let's get to work"} /></div>
          </div>


        </main>
      </motion.div>

    </div>
  )
}