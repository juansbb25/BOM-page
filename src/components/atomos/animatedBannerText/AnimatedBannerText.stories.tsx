import React from 'react'
import AnimatedBannerText, {
  AnimatedBannerTextProps,
} from './AnimatedBannerText'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Atomos/AnimatedBannerText',
  component: AnimatedBannerText,
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
}
const Template = ({ ...rest }: AnimatedBannerTextProps) => {
  //👇 Assigns the function result to a variable

  return <AnimatedBannerText {...rest} />
}
export const Primary = Template.bind({})

Primary.args = {
  myText: ['TEXTO 1', 'TEXTO 2', 'TEXTO 3'],
  toColor: 'black',
  fromColor: 'black',
  mass: 2000,
}
