//import styles from '../styles/nav.module.css'
//import Link from 'next/link'
import Link from './activelink'

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link activeClassName="active" href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/favorites">
            <a>Favorites</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}