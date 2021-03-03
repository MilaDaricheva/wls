import Head from 'next/head'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"
import CTAButton from '../components/ctabutton'

const siteTitle = 'Short Summary'

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
          <p>Websites. Web Apps. Native Apps.</p>
          <p>Planning. Complex business logic.</p>
          <p>Attention to details. Best practices.</p>
          <CTAButton label={"Let's get to work"} />

        </main>
      </motion.div>
    </div>
  )
}
