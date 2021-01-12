import Head from 'next/head'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"
import CTAButton from '../components/ctabutton'

const siteTitle = 'WideLine Studio'

export default function Home() {

  //console.log("VARS", staticVars.pageTransition);

  return (
    <div className="mainWrap">

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <motion.div id="home" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <h1>
            {siteTitle}
          </h1>
          <p>Tired of old and hard to extend platforms?</p>
          <p>WideLine Studio is using only best practices to deliver high quality solutions.</p>
          <p>Coding modern web designs using modern web technologies.</p>
          <CTAButton label={"Let's get to work"} />
        </main>
      </motion.div>
    </div>
  )
}
