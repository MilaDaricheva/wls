import Head from 'next/head'
import Logo from '../components/logosvg'
import Nav from '../components/nav'
import MainSvg from '../components/mainsvg'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react';

export const siteTitle = 'WideLine Studio'

function transformCircle(event) {
  // 1. Find mouse position
  let xAxis = Math.round((window.innerWidth * 0.5 - event.pageX) / (window.innerWidth / 30));
  let yAxis = Math.round((window.innerHeight * 0.5 - event.pageY) / (window.innerHeight / 30));

  //console.log(xAxis, yAxis, zAxis3);
  // 2. Create animations
  let circleEl = document.getElementById("circle");

  circleEl.style.transform = `rotateY(${-xAxis}deg) rotateX(${-yAxis}deg)`;

}

function Layout({ router, children }) {
  const [dimensions, setDimensions] = useState({
    height: "100vh",
    width: "100%"
  });

  useEffect(() => {

    //Set inner height first time too, then on resize
    if (dimensions.height === "100vh") {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
      //console.log('First resized to: ', window.innerWidth, 'x', window.innerHeight)
    }

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
      //console.log('UPT: ', window.innerWidth, 'x', window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="container">
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Coding modern web designs using modern web technologies."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://wideline-studio.com/" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <div className="wrapper" style={{ minHeight: dimensions.height, width: dimensions.width }}>
        <div className="headerWrapper">
          <Logo />
          <Nav />
        </div>
        <div className="main" onMouseMove={transformCircle}>
          {children}
        </div>

        <footer className="footer">
          WideLine Studio &copy;2021
        </footer>
      </div>
      <MainSvg />
    </div>
  )
}

export default withRouter(Layout)