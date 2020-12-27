import Head from 'next/head'
import styles from '../styles/core.module.css'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"
import ContactForm from "../components/contactform"

const siteTitle = 'Contact Us'

export default function Contact() {

  return (
    <div>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <motion.div id="contact" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
          <h1 className={styles.title}>
            {siteTitle}
          </h1>
          <ContactForm />
        </main>
      </motion.div>
    </div>

  )
}