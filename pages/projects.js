import Head from 'next/head'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"
import { getPosts } from '../utils/posts';
import Link from 'next/link';

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
        <meta name="description" content="WideLine Studio Blog for Projects review"/>
      </Head>
      <motion.div id="projects" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main className="projects">
          <h1>
            {siteTitle}
          </h1>

          <ul>
            {props.posts.map(post => (
              <li key={post.id}>
                <Link href={`/project/${post.slug}`}> 
                  <a>
                    <h4>{post.title} &#10547;</h4>
                    <span>{post.excerpt}</span>
                    <span className="dots">&#9900;&#9900;&#9900;</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

        </main>
      </motion.div>

    </div>
  )
}