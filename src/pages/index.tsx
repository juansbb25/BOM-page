// Step 5 - delete Instructions components
import MainLayout from '@/components/layout/MainLayout'
import Footer from '@/components/moleculas/Footer'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import img from '@/public/img/1.jpg'
import { Box, Grid, Stack, Typography } from '@mui/material'
import SearchBar from '@/components/atomos/SearchBar'
import CategoryPaper from '@/components/atomos/categoryPaper'
import ProductCard from '@/components/atomos/ProductCard'
// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

// dom components goes here
const DOM = () => {
  const refHeader = React.useRef()

  const [ref, setRef] = useState(null)
  useEffect(() => {
    setRef(refHeader)
  }, [refHeader])
  return (
    <MainLayout
      isTransparent
      title='Mi Pagina'
      reference={refHeader}
      menuItems={[
        { name: 'Menu', path: '/menu' },
        { name: 'home', path: '/' },
      ]}
    >
      <Box
        sx={{
          minHeight: 300,
          zIndex: 0,
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <Image
          src={
            'https://static.vecteezy.com/system/resources/previews/000/833/542/non_2x/abstract-black-background-with-blue-light-lines-crossing-vector.jpg'
          }
          alt='Picture of the author'
          layout='fill'
          placeholder='blur'
          blurDataURL='https://abstackwp.khingars.com/wp-content/uploads/2021/09/image-blur-placeholder.png'
          objectFit='cover'
        />
        <Box
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: -20,
          }}
        >
          <SearchBar />
        </Box>
      </Box>
      <Stack
        sx={{ paddingX: { xs: 2, sm: 3, md: 6, lg: 12 }, paddingY: 6 }}
        spacing={4}
      >
        <Typography variant='h5'>Categorias</Typography>
        <Stack
          direction='row'
          alignItems='center'
          spacing={2}
          sx={{
            overflowX: 'hidden',
          }}
        >
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((item, i) => (
            <CategoryPaper key={i} text='Categoria' />
          ))}
        </Stack>
        <Grid container spacing={2}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              {ref && (
                <ProductCard
                  reference={refHeader}
                  title={item}
                  imgPath='https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/w_1280,c_limit/the-ultimate-hamburger.jpg'
                  text='lorem ipsum dolor sit amet, consectetur adip'
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Stack>
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
