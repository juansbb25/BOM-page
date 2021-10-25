import AnimatedBannerText from '@/components/atomos/animatedBannerText/AnimatedBannerText'
import AnimatedOnHoverImage from '@/components/atomos/AnimatedOnHoverImage/AnimatedOnHoverImage'
import Header from '@/components/atomos/Header'
import Instructions from '@/components/dom/Instructions'
import { Button } from '@mui/material'
import dynamic from 'next/dynamic'
import { FC } from 'react'
//import Box from '@/components/canvas/Box/Box'

const Box = dynamic(() => import('@/components/canvas/Box/Box'), {
  ssr: false,
})
const RoomComponent = dynamic(
  () => import('@/components/canvas/IsometricRoom/IsometricRoom'),
  {
    ssr: false,
  }
)

const DOM = () => {
  return (
    <>
      <Header
        title='TEXT'
        menuItems={[
          { name: 'Home', path: '/' },
          { name: 'Box', path: '/box' },
        ]}
      />
      <div className='flex w-full justify-center absolute bottom-4'>
        <Button color='primary' variant='contained'>
          Descubre
        </Button>
      </div>
    </>
  )
}

type R3FProps = {
  r3f: any
}

const R3F: FC<R3FProps> = () => {
  return (
    <>
      <RoomComponent />
    </>
  )
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
      title: 'Box',
    },
  }
}
