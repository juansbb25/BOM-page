import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
type ProductCardProps = {
  title: string
  imgPath: string
  text: string
}
const ProductCard: React.FC<ProductCardProps> = ({ title, imgPath, text }) => {
  return (
    <Stack alignItems='center'>
      <Image
        src={imgPath}
        layout='fixed'
        width={200}
        height={200}
        alt=''
      ></Image>
      <Typography variant='h6'>{title}</Typography>
      <Typography>{text}</Typography>
    </Stack>
  )
}

export default ProductCard
