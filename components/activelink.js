import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || '';
  //console.log("CN", className, "props", props, "pathname", router.pathname);
  if ((router.pathname === props.href || router.pathname === props.childMenuItems) && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link{...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);