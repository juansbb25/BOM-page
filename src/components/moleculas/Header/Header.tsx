import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Stack,
} from '@mui/material'
import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '@/components/atomos/Link/Link'
import { useRouter } from 'next/router'

export type HeaderProps = {
  logo?: string
  title: string
  isTransparent?: boolean
  menuItems: {
    name: string
    path: string
  }[]
}

const Header: FC<HeaderProps> = ({ logo, title, menuItems, isTransparent }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
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
        <Typography
          color={isTransparent ? 'primary.main' : 'primary.contrastText'}
          variant='h5'
        >
          {item.name}
        </Typography>
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
      <AppBar style={isTransparent ? { background: 'transparent' } : {}}>
        <Toolbar>
          <Stack direction='row'>{menuItemsComponents}</Stack>
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
