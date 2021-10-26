import { Box, Typography } from '@mui/material'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React, { FC } from 'react'

export type FooterProps = {
  text: string
}

const Footer: FC<FooterProps> = ({ text }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      width='full'
      height={48}
      textAlign='center'
      justifyContent='center'
      bgcolor='primary.main'
    >
      <Typography variant='h5' color='primary.contrastText'>
        {text}
      </Typography>
    </Box>
  )
}
export default Footer
