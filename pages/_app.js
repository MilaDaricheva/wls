import "fontsource-barlow-condensed/400-normal.css"
import '../styles/globals.css'
import { withRouter } from 'next/router'
import { AnimatePresence } from "framer-motion"
import coreUtils from '../utils/coreutils'
import Layout from '../components/layout'

function MyApp({ Component, pageProps, router }) {
  //console.log("UTILS", coreUtils.getPageId(router.pathname));
  const pgId = coreUtils.getPageId(router.pathname);
  //console.log("ROUTER", pgId);
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={pgId} />
      </AnimatePresence>
    </Layout >
  )
}

export default withRouter(MyApp)
