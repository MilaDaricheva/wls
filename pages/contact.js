import Head from 'next/head'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"
import ContactForm from "../components/contactform"

const siteTitle = "Let's get to work"

export default function Contact() {

  return (
    <div className="mainWrap">

      <Head>
        <title>{siteTitle}</title>
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