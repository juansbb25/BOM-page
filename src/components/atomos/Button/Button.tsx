import React, { FC } from 'react'
import { Button as MDButton } from '@mui/material'

const Button: FC = ({ children }) => {
  return (
    <MDButton variant='contained' color='primary'>
      {children}
    </MDButton>
  )
}

export default Button
