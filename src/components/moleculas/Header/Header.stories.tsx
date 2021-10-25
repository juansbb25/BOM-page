import React from 'react'
import Header, { HeaderProps } from './Header'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Atomos/Header',
  component: Header,
  argTypes: {
    title: 'TEXT',
  },
}
const Template = ({ ...rest }: HeaderProps) => {
  //👇 Assigns the function result to a variable

  return <Header {...rest} />
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'TEXT',
  menuItems: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/pages/about' },
  ],
}
