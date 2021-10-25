import React, { Children, FC, ReactChild, ReactElement } from 'react'
import NextLink from 'next/link'
import { withRouter } from 'next/router'
import { MenuItem } from '@mui/material'
type LinkProps = {
  router: any
  children: ReactElement // Due to a children could be text or empty or a boolean this enforce to be a component
  href: string
  activeClassName?: string
  isButton?: boolean
}

const Link: FC<LinkProps> = ({
  router,
  children,
  isButton = false,
  ...props
}) => {
  const child = Children.only(children)

  if (!child) return <NextLink href='/'></NextLink>

  let className = child.props.className || ''
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim()
  }

  delete props.activeClassName

  return !isButton ? (
    <NextLink {...props}>{React.cloneElement(child, { className })}</NextLink>
  ) : (
    <MenuItem selected={router.pathname === props.href}>
      <NextLink {...props}>{React.cloneElement(child, { className })}</NextLink>
    </MenuItem>
  )
}

export default withRouter(Link)

//The function of this component is to add the active class to a route if the current url matchs with the href in the compoonent
