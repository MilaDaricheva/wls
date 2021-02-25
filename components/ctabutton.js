import Link from './activelink'
import { motion } from "framer-motion";

export default function CTAButton(props) {

  function onTap(event, info) {
    //console.log("end", info.point.x, info.point.y)
    event.path[0].classList.remove("active");
  }
  function onTapCancel(event, info) {
    //console.log("cancel", info.point.x, event.path[0])
    event.path[0].classList.remove("active");
  }
  function onTapStart(event, info) {
    //console.log("start", info.point.x, event.path[0]);
    event.path[0].classList.add("active");
    //event.path[1].style.transform = "scale(2)";
  }
  return (

    <motion.div
      whileTap={{ scaleY: 1.2 }}
      onTapStart={onTapStart}
      onTapCancel={onTapCancel}
      onTap={onTap}
      className="ctaButton"
    >
      <Link href="/contact">
        <a>{props.label}</a>
      </Link>
    </motion.div>

  )
}