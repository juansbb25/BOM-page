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
  refCallback: (ref: any) => void
}
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  menuItems,
  title,
  isTransparent,
  refCallback,
}) => {
  const refHeader = React.useRef()
  refCallback(refHeader)

  const [ref, setRef] = useState(null)
  useEffect(() => {
    setRef(refHeader)
  }, [refHeader])
  return (
    <Stack
      sx={{ height: '100%', width: '100%' }}
      overflow='auto'
      ref={refHeader}
    >
      <Header title={title} menuItems={menuItems} reference={ref} />
      {children}
      <Footer text='holas' />
    </Stack>
  )
}

export default MainLayout
