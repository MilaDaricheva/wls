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
        <meta name="description" content="WideLine Studio Favorite Tools" />
      </Head>
      <motion.div id="favorites" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <h1>
            {siteTitle}
          </h1>

          <p>REST APIs give us flexibility.</p>
          <p>Cloud computing provides scalability.</p>
          <p>Headless CMS makes content accessible on any device.</p>
          <CTAButton label={"Let's get to work"} />

        </main>
      </motion.div>

    </div>
  )
}