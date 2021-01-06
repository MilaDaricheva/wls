import CircleLogo from '../public/svg/CircleLogo.svg';
import WideLineStudi from '../public/svg/WideLineStudi.svg';
import Link from './activelink'

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <a aria-label="WideLine Studio Logo" >
          <WideLineStudi />
          <CircleLogo />
        </a>
      </Link>

    </div>
  )
}