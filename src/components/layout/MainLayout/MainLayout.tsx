import Footer from '@/components/moleculas/Footer'
import Header from '@/components/moleculas/Header'
import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

type Items = {
  name: string
  path: string
}
type MainLayoutProps = {
  title: string
  menuItems: Items[]
  isTransparent: boolean
  reference: React.MutableRefObject<any>
}
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  menuItems,
  title,
  isTransparent,
  reference,
}) => {
  return (
    <Stack
      sx={{ height: '100%', width: '100%' }}
      overflow='auto'
      ref={reference}
    >
      <Header title={title} menuItems={menuItems} reference={reference} />
      {children}
      <Footer text='holas' />
    </Stack>
  )
}

export default MainLayout
