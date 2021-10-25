// The preview application is essentially just your stories with
// a framework-agnostic 'router'.
// It renders whichever story the manager application tells it to render.
// In this case we just use it to import the stylesheet and inject it
// in the context of our stories
import { RouterContext } from 'next/dist/shared/lib/router-context' // next 11.2
import '../src/styles/index.css'
import { ThemeProvider } from '@mui/material'
import { addDecorator } from '@storybook/react'
import { muiTheme } from '../src/themes/stylesheet'
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

export const parameters = {
  nextRouter: {
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {},
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z'
    />
  ),
})
addDecorator((story) => (
  <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>
))
