import { Box, Typography } from '@mui/material'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React, { FC } from 'react'

export type FooterProps = {
  backgroundColor: string
  textColor: any
}

const Footer: FC<FooterProps> = ({ backgroundColor, textColor }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      m={4}
      bgcolor={backgroundColor}
      width='full'
      height={128}
      textAlign='center'
      justifyContent='center'
    >
      <Box
        display='flex'
        height='50%'
        textAlign='center'
        justifyContent='center'
      >
        <Typography color={textColor}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>
      <Box>
        <Facebook color='secondary' />
        <Instagram color='secondary' />
        <Twitter color='secondary' />
      </Box>
    </Box>
  )
}
export default Footer
