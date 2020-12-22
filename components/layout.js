import Head from 'next/head'
import Nav from '../components/nav'
import MainSvg from '../components/mainsvg'
import styles from '../styles/core.module.css'
import { withRouter } from 'next/router'
import coreUtils from '../utils/coreutils'
import { motion } from "framer-motion"

export const siteTitle = 'WideLine Studio'

function transformCircle(event) {
  // 1. Find mouse position
  let xAxis = Math.round((window.innerWidth * 0.5 - event.pageX) / (window.innerWidth / 50));
  let yAxis = Math.round((window.innerHeight * 0.5 - event.pageY) / (window.innerHeight / 50));
  //console.log(xAxis, yAxis)
  // 2. Create animations
  let circleEl = document.getElementById("circle");
  circleEl.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

function Layout({ router, children }) {

  const pgId = coreUtils.getPageId(router.pathname);

  //console.log("PAGEID", pgId);

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Coding modern web designs using modern technologies."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Nav />

        <motion.div className={styles.main} width={"100%"} height={"100%"} position={"relative"} onMouseMove={transformCircle}>
          {children}
        </motion.div>

        <footer className={styles.footer}>
          WideLine Studio &copy;2020
        </footer>
      </div>
      <MainSvg />
    </div>
  )
}

export default withRouter(Layout)