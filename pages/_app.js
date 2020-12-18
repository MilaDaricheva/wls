import '../styles/globals.css'
import { withRouter } from 'next/router'
import { AnimatePresence } from "framer-motion"
import getPageId from '../utils/coreutils'

function MyApp({ Component, pageProps, router }) {
  const pgId = getPageId(router.pathname);
  //console.log("ROUTER", pgId);
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={pgId} />
    </AnimatePresence>)
}

export default withRouter(MyApp)
