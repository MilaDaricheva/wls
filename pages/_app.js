import '../styles/globals.css'
import { withRouter } from 'next/router'
import { AnimatePresence } from "framer-motion"
import coreUtils from '../utils/coreutils'

function MyApp({ Component, pageProps, router }) {
  //console.log("UTILS", coreUtils.getPageId(router.pathname));
  const pgId = coreUtils.getPageId(router.pathname);
  //console.log("ROUTER", pgId);
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={pgId} />
    </AnimatePresence>)
}

export default withRouter(MyApp)
