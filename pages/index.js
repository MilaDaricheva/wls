import Head from 'next/head'
import styles from '../styles/core.module.css'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"

const siteTitle = 'WideLine Studio'

export default function Home() {

  console.log("VARS", staticVars.pageTransition);

  return (
    <div>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <motion.div id="home" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <h1 className={styles.title}>
            {siteTitle}
          </h1>

          <p className={styles.description}>
            Coding modern web designs using modern technologies.
        </p>
          <p>You wait too long for your custom design to be implemented? WideLine Studio is using only best practices and modern technologies to save time and cost of development process. </p>
          <p>Old legacy platforms are like retro cars, might look very cool but to maintain them in good shape takes a long time. </p>
          <p>WideLine Studio works with each client to create functionality modules that are unique for their business. Thanks to superior flexibility of modern technologies any custom web design can be integrated as a lightweight addition to existing modules. </p>

        </main>
      </motion.div>
    </div>
  )
}
