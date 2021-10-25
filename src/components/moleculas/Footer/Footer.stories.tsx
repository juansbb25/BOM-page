import React from 'react'
import Footer, { FooterProps } from './Footer'
export default {
  title: 'Atomos/Footer',
  component: Footer,
  controls: {
    matchers: {
      backgroundColor: /(background|color)$/i,
    },
  },
}
const Template = ({ ...rest }: FooterProps) => {
  //👇 Assigns the function result to a variable

  return <Footer {...rest} />
}
export const Primary = Template.bind({})

Primary.args = { backgroundColor: 'primary.main', textColor: 'textSecondary' }
