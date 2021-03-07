import { useRef } from "react";
import { useState, useEffect } from 'react'
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./menutoggle";
import { MenuItem } from "./menuitem";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function Navigation(props) {
  if (props.layoutDimensions.headerBar > 0) {
    if (props.layoutDimensions.width < 1025) {
      //mobile menu
      const [isOpen, toggleOpen] = useCycle(false, true);
      const [isOpenClass, toggleOpenClass] = useCycle(false, true);
      const containerRef = useRef(null);

      const [rads, setRads] = useState({
        smallRad: props.layoutDimensions.headerBar,
        bigRad: props.layoutDimensions.height
      });

      const sidebar = {
        open: {
          clipPath: `ellipse(${3 * rads.bigRad}px ${rads.bigRad}px at 0px 0px)`,
          transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 100,
            damping: 10,
            onComplete: () => {
              //console.log("open 3");
              toggleOpenClass();
            }
          }
        },
        closed: {
          clipPath: `ellipse(${1.5 * rads.smallRad}px ${rads.smallRad}px at 0px 0px)`,
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15,
            onComplete: () => {
              //console.log("complete 3");
              toggleOpenClass();
            }
          }
        }
      };

      useEffect(() => {
        const headerEl = document.getElementById("headerBar");

        function handleSidebar() {
          if (rads.smallRad !== props.layoutDimensions.headerBar) {
            setRads({
              smallRad: headerEl.clientHeight,
              bigRad: window.innerHeight
            });
          }
        }

        handleSidebar();

      }, [props]);

      function onPanEnd(event, info) {
        //console.log("pan end", info.offset, info.point.y);
        if (info.offset.y < -20) {
          toggleOpen();
        }
      }

      return (
        <motion.nav
          className={`mobileNav disableselect ${(isOpen || isOpenClass) ? "open" : "closed"} ${(isOpen) ? "opening" : "closing"}`}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          onPanEnd={onPanEnd}
          ref={containerRef}
        >
          <motion.div key={rads.smallRad} className="background" variants={sidebar} />
          <motion.ul variants={listVariants}>
            {itemValues.map(i => (
              <MenuItem item={i} key={i.key} toggle={() => toggleOpen()} />
            ))}
          </motion.ul>
          <MenuToggle toggle={() => toggleOpen()} />
          <span className="note">You may Swipe Up to Close</span>
        </motion.nav>

      )
    } else {
      //menu for desktop
      return (
        <nav className="desktopNav disableselect" >
          <ul>
            {itemValues.map(i => (
              <MenuItem item={i} key={i.key} />
            ))}
          </ul>
        </nav>
      )
    }
  } else {
    return (
      //not ready yet
      <div />
    )
  }
}

const itemValues = [
  { key: 0, href: "/", label: "Home" },
  { key: 1, href: "/favorites", label: "Favorites" },
  { key: 2, href: "/projects", label: "Projects", childMenuItems: "/project/[slug]" },
  { key: 3, href: "/contact", label: "Contact" }
];
