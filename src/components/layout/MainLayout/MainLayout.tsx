import Footer from '@/components/moleculas/Footer'
import Header from '@/components/moleculas/Header'
import { Stack } from '@mui/material'
import React from 'react'

type Items = {
  name: string
  path: string
}
type MainLayoutProps = {
  children: React.ReactElement
  title: string
  menuItems: Items[]
  isTransparent: boolean
}
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  menuItems,
  title,
  isTransparent,
}) => {
  return (
    <Stack>
      <Header
        title={title}
        menuItems={menuItems}
        isTransparent={isTransparent}
      />
      {children}
      <Footer text='holas' />
    </Stack>
  )
}

export default MainLayout
