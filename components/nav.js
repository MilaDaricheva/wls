//import styles from '../styles/nav.module.css'
//import Link from 'next/link'
import Link from './activelink'

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link activeClassName="active" href="/">
            <a data-item='Home' >Home</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/favorites">
            <a data-item='Favorites' >Favorites</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/projects">
            <a data-item='Projects' >Projects</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" href="/contact">
            <a data-item='Contact' >Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}