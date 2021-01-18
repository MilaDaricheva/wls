import Head from 'next/head'
import Logo from '../components/logosvg'
import Nav from '../components/nav'
import MainSvg from '../components/mainsvg'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react';
import CircleLogoS from '../public/svg/CircleLogoS.svg';

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

function Layout({ children, router }) {

  const routerPath = router.pathname;
  //console.log("routerPath", routerPath);

  const [dimensions, setDimensions] = useState({
    height: "100vh",
    width: "100%"
  });

  useEffect(() => {

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
      document.documentElement.style.setProperty('--window-height', window.innerHeight + "px");
      document.documentElement.style.setProperty('--window-width', window.innerWidth + "px");

    }

    //Set inner height first time too, then on resize
    if (dimensions.height === "100vh") {
      handleResize()
    }

    window.addEventListener('resize', handleResize)

    window.addEventListener('orientationchange', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize),
        window.removeEventListener('orientationchange', handleResize)
    }
  })

  return (
    <div className="container" style={{ minHeight: dimensions.height, width: dimensions.width }}>
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
      <div className="wrapper" style={{ minHeight: dimensions.height, width: dimensions.width }}>
        <div className="headerWrapper">
          <Logo />
          <Nav />
        </div>
        <div className="main" onMouseMove={transformCircle}>
          {children}
        </div>

        <footer className="footer">
          <span>WideLine Studio</span>
          <CircleLogoS />
          <span>2021</span>
        </footer>
      </div>
      <MainSvg />
    </div>
  )
}

export default withRouter(Layout)