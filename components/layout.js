import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/core.module.css'
import { withRouter } from 'next/router'

export const siteTitle = 'WideLine Studio'

function getPageId(path) {
  var pageId = path.substring(1);
  if (pageId === "") {
    return "home";
  } else {
    return pageId;
  }
}

function Layout({ router, children, ...props }) {

  //const router = useRouter();
  //console.log("PROPS ", props);
  const pgId = getPageId(router.pathname);

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="Description" content="Coding modern web designs using modern technologies."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Nav />

        <div id={pgId} className={styles.main}>
          {children}
        </div>

        <footer className={styles.footer}>
          WideLine Studio &copy;2020
        </footer>
      </div>
    </div>
  )
}

export default withRouter(Layout)