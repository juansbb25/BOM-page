import React, { FC, useState } from 'react'
import { useSpring, a } from 'react-spring'
import Image from 'next/image'

export type AnimatedOnHoverImageProps = {
  src: string
  time: number
}

const AnimatedOnHoverImage: FC<AnimatedOnHoverImageProps> = ({ src, time }) => {
  const [state, setState] = useState(false)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: time },
  })
  return (
    <a.div
      className='flex w-32 sm:w-40 lg:w-48'
      style={{
        scale: x.to({
          range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
        }),
      }}
    >
      <Image
        alt='Bitcoin image'
        src={src}
        onMouseOver={() => {
          setState(true)
        }}
        onMouseOut={() => {
          setState(false)
        }}
        width={64}
        height={64}
      ></Image>
    </a.div>
  )
}
export default AnimatedOnHoverImage
