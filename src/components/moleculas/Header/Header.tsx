import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Stack,
  useScrollTrigger,
} from '@mui/material'
import React, { FC, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '@/components/atomos/Link/Link'

export type HeaderProps = {
  logo?: string
  title: string
  menuItems: {
    name: string
    path: string
  }[]
  reference?: React.MutableRefObject<any>
}

const Header: FC<HeaderProps> = ({ reference, menuItems }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    ...(reference && { target: reference.current }),
  })
  console.debug(reference)

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
        <>item.name</>
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
  useEffect(() => {}, [reference])
  return (
    <div className='flex-grow'>
      <AppBar sx={trigger ? {} : { backgroundColor: 'transparent' }}>
        <Toolbar>
          <Stack direction='row'>{menuItemsComponents}</Stack>
          <div className='absolute md:hidden right-4'>
            <IconButton
              aria-label='show more'
              aria-haspopup='true'
              color='inherit'
              onClick={handleProfileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </div>
          {rendererMenu}
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
