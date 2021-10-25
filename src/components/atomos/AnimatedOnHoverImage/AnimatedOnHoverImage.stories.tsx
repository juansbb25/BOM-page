import React from 'react'
import AnimatedOnHoverImage, {
  AnimatedOnHoverImageProps,
} from './AnimatedOnHoverImage'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Atomos/AnimatedOnHoverImage',
  component: AnimatedOnHoverImage,
  controls: {
    matchers: {},
  },
}
const Template = ({ ...rest }: AnimatedOnHoverImageProps) => {
  //👇 Assigns the function result to a variable

  return <AnimatedOnHoverImage {...rest} />
}
export const Primary = Template.bind({})

Primary.args = {
  time: 1000,
  src: '/coinsIcons/Bitcoin.png',
}
