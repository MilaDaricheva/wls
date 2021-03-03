import { motion } from "framer-motion";
import Link from './activelink'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ item, toggle }) => {
  //console.log("Item Tog", toggle);
  if (toggle) {
    return (
      <motion.li
        variants={variants}
      >
        <Link
          activeClassName="active"
          href={item.href}
          childMenuItems={item.childMenuItems}
        >
          <a onClick={toggle} data-item={item.label} >{item.label}</a>
        </Link>
      </motion.li>
    );
  } else {
    return (
      <li>
        <Link
          activeClassName="active"
          href={item.href}
          childMenuItems={item.childMenuItems}
        >
          <a data-item={item.label} >{item.label}</a>
        </Link>
      </li>
    );
  }

};
