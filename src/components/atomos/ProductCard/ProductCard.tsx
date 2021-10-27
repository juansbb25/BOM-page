import {
  Box,
  Fade,
  Paper,
  Slide,
  Stack,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import React from 'react'
import Image from 'next/image'
type ProductCardProps = {
  title: string
  imgPath: string
  text: string
  reference: React.MutableRefObject<any>
}
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imgPath,
  text,
  reference,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: reference.current,
  })
  console.log(reference)
  return (
    <Slide in={trigger} direction='right'>
      <Stack alignItems='center'>
        <Box
          sx={{
            height: 200,
            width: 200,
            position: 'relative',
            border: '1px solid',
            borderRadius: '15px',
          }}
          overflow='hidden'
        >
          <Image
            src={imgPath}
            alt=''
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='https://abstackwp.khingars.com/wp-content/uploads/2021/09/image-blur-placeholder.png'
          ></Image>
        </Box>
        <Typography variant='h6'>{title}</Typography>
        <Typography>{text}</Typography>
      </Stack>
    </Slide>
  )
}

export default ProductCard
