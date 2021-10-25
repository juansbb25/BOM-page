import dynamic from 'next/dynamic'
// Step 5 - delete Instructions components
import Instructions from '@/components/dom/Instructions'
import { FC } from 'react'
import { Button } from '@mui/material'
import Header from '@/components/atomos/Header'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  return (
    <Header
      title='Hola mundo'
      menuItems={[
        { name: 'Home', path: '/' },
        { name: 'Box', path: '/box' },
      ]}
    />
  )
}
type R3FProps = {
  r3f: any
}
// canvas components goes here
const R3F: FC<R3FProps> = () => {
  return (
    <>
      <Shader />
    </>
  )
}

const Page = () => {
  return (
    <>
      <Button variant='contained' color='primary'>
        Ejemplo de boton material
      </Button>
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
