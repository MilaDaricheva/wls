import Link from './activelink'

export default function CTAButton(props) {
  return (
    <div className="ctaButton">
      <Link href="/contact">
        <a>{props.label}</a>
      </Link>
    </div>
  )
}