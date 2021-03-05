import Head from 'next/head'
import dynamic from 'next/dynamic'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"

const ContactForm = dynamic(() => import('../components/contactform'))

const siteTitle = "Let's work together"

export default function Contact() {

  return (
    <div className="mainWrap">

      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="WideLine Studio Contact Page. Let's work together." />
      </Head>

      <motion.div id="contact" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <h1>
            {siteTitle}
          </h1>
          <ContactForm />
        </main>
      </motion.div>
    </div>

  )
}