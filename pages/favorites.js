import Head from 'next/head'
import styles from '../styles/core.module.css'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"

const siteTitle = 'Our Favorites'

export default function Favorites(props) {
  console.log(props.dataFromParent);
  return (
    <div>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.div id="favorites" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <h1 className={styles.title}>
            {siteTitle}
          </h1>

          <p>REST APIs give us flexibility.</p>

          <p>Cloud computing provides scalability.</p>

          <p>Headless CMS makes content accessible via an API for display on any device.</p>

        </main>
      </motion.div>

    </div>
  )
}