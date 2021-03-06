import Head from 'next/head'
import Logo from '../components/logosvg'
import Navigation from "./navigation"
import MainSvg from '../components/mainsvg'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CircleLogoS from '../public/svg/CircleLogoS.svg'

export const siteTitle = 'WideLine Studio';

let circleEl;
let headerEl;

let mouseX = 0;
let mouseY = 0;
const areaSize = 30;
const degrees = 40;

// function called on each mouse move
function transformCircle(event, iWidth, iHeight) {

  // if circle element is defined already
  if (circleEl) {

    // if mouse moves less than 30px from previous move, we do nothing, performance optimization
    if (Math.abs(event.pageX - mouseX) > areaSize || Math.abs(event.pageY - mouseY) > areaSize) {

      // remember position for the move/mouse
      mouseX = event.pageX;
      mouseY = event.pageY;

      // calculate degrees for rotation
      // from the middle of the screen (main content area only) circle will follow the mouse 
      // but no more that 20 deg from the center to the sides, otherwise it is just too wobbly 
      let xAxis = Math.round((iWidth * 0.5 - event.pageX) / (iWidth / degrees));
      let yAxis = Math.round((iHeight * 0.5 - event.pageY) / (iHeight / degrees));

      // rotate the circle
      circleEl.style.transform = `rotateY(${-xAxis}deg) rotateX(${-yAxis}deg)`;
    }
  }
}

function Layout({ children, router }) {

  const routerPath = router.pathname;
  //console.log("routerPath", routerPath);

  const [dimensions, setDimensions] = useState({
    height: "100vh",
    width: "100%",
    headerBar: 0
  });

  useEffect(() => {

    circleEl = document.getElementById("circle"); //define circle element
    headerEl = document.getElementById("headerBar"); //define header element

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        headerBar: headerEl.clientHeight
      })
      document.documentElement.style.setProperty('--window-height', window.innerHeight + "px");
      document.documentElement.style.setProperty('--window-width', window.innerWidth + "px");

    }

    //Set inner height first time too, then on resize
    if (dimensions.height === "100vh") {
      handleResize()
    }
    //console.log(dimensions.headerBar);
    window.addEventListener('resize', handleResize);

    window.addEventListener('orientationchange', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize),
        window.removeEventListener('orientationchange', handleResize)
    }
  })

  return (
    <div className="container" >
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Coding modern web designs using modern web technologies."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://wideline-studio.com/" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C68WNE0L08"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C68WNE0L08');
          
          gtag('event', 'page_view', {
            page_path: '${routerPath}'
          });
          `
          }}
        />
      </Head>
      <div className="wrapper" style={{ height: dimensions.height, width: dimensions.width }}>
        <div className="headerWrapper" id="headerBar">
          <Logo />
          <Navigation layoutDimensions={dimensions} />
        </div>

        <div className="main" onMouseMove={e => { transformCircle(e, dimensions.width, dimensions.height) }}>
          {children}
        </div>

        <footer className="footer">
          <span>Modern Web Technologies</span>
          <CircleLogoS />
          <span>2021</span>
        </footer>
      </div>
      <MainSvg />
    </div>
  )
}

export default withRouter(Layout)