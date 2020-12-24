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
  let xAxis = Math.round((window.innerWidth * 0.5 - event.pageX) / (window.innerWidth / 40));
  let yAxis = Math.round((window.innerHeight * 0.5 - event.pageY) / (window.innerHeight / 40));
  let zAxis = Math.abs(xAxis) + Math.abs(yAxis);
  let zAxis1 = 5 + zAxis;
  let zAxis4 = 10 + zAxis;
  let zAxis2 = 20 + zAxis;
  let zAxis3 = 30 + zAxis;
  //console.log(xAxis, yAxis, zAxis3);
  // 2. Create animations
  //let circleEl = document.getElementById("circle");
  let circleEl1 = document.getElementById("circle1");
  let circleEl2 = document.getElementById("circle2");
  let circleEl3 = document.getElementById("circle3");
  let circleEl4 = document.getElementById("circle4");
  //circleEl.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  circleEl1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(${zAxis1}px)`;
  circleEl2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(${zAxis2}px)`;
  circleEl3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(${zAxis3}px)`;
  circleEl4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(${zAxis4}px)`;
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