import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from '@mui/material'
import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '../../atomos/Link/Link'
import { useRouter } from 'next/router'

export type HeaderProps = {
  logo?: string
  title: string
  menuItems: {
    name: string
    path: string
  }[]
}

const Header: FC<HeaderProps> = ({ logo, title, menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [isMenuOpen, setIsMenuOpen] = React.useState(null)
  const router = useRouter()
  const handleProfileMenuOpen = (event) => {
    setIsMenuOpen(Boolean(event.currentTarget))
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setIsMenuOpen(false)
  }

  const menuItemsComponents = menuItems.map((item, index) => {
    return (
      <Link key={index} href={item.path} isButton>
        <h1>{item.name}</h1>
      </Link>
    )
  })
  const rendererMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      id='primary-search-account-menu'
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {menuItemsComponents}
    </Menu>
  )

  return (
    <div className='flex-grow'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className=''>
            {title}
          </Typography>
          <div className='hidden md:flex absolute right-4 '>
            {menuItemsComponents}
          </div>
          <div className='flex md:hidden absolute right-4'>
            <IconButton
              aria-label='show more'
              aria-haspopup='true'
              color='inherit'
              onClick={handleProfileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {rendererMenu}
    </div>
  )
}
export default Header
