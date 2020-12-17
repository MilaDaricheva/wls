import styles from '../styles/nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/favorites">
              <a>Favorites</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}