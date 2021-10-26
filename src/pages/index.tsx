// Step 5 - delete Instructions components
import MainLayout from '@/components/layout/MainLayout'
import Footer from '@/components/moleculas/Footer'
import React, { FC } from 'react'
import Image from 'next/image'
import img from '@/public/img/1.jpg'
import { Box } from '@mui/material'
import SearchBar from '@/components/atomos/SearchBar'
// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

// dom components goes here
const DOM = () => {
  return (
    <MainLayout
      isTransparent
      title='Mi Pagina'
      menuItems={[
        { name: 'Menu', path: '/menu' },
        { name: 'home', path: '/' },
      ]}
    >
      <>
        <Box
          sx={{
            height: 400,
            zIndex: -10,
            position: 'relative',
            top: 0,
            left: 0,
            width: '100vw',
            bgcolor: 'red',
          }}
        >
          <Image
            src={img}
            alt='Picture of the author'
            layout='fill'
            objectFit='cover'
          />
          <Box
            sx={{
              width: 1000,
              position: 'absolute',
              bottom: -20,
              right: 0,
              left: 0,
              margin: 'auto',
            }}
          >
            <SearchBar />
          </Box>
        </Box>
        <Box sx={{ height: 400 }}>HOLA</Box>
      </>
    </MainLayout>
  )
}
type R3FProps = {
  r3f: any
}
// canvas components goes here
const R3F: FC<R3FProps> = () => {
  return <></>
}

const Page = () => {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
