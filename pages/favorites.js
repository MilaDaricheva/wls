import Head from 'next/head'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"
import CTAButton from '../components/ctabutton'

const siteTitle = 'Our Favorites'

export default function Favorites() {

  return (
    <div className="mainWrap">

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.div id="favorites" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <h1>
            {siteTitle}
          </h1>

          <p>REST APIs give us flexibility.</p>

          <p>Cloud computing provides scalability.</p>

          <p>Headless CMS makes content accessible via an API for display on any device.</p>
          <div className="pushEffWrapper">
            <div className="pushEffect"><CTAButton label={"Let's get to work"} /></div>
          </div>


        </main>
      </motion.div>

    </div>
  )
}