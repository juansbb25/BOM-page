import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
type PaperProps = { text: string }
const CategoryPaper: React.FC<PaperProps> = ({ text }) => {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
        borderRadius: 100,
      }}
    >
      <Paper
        elevation={12}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant='h6'>{text}</Typography>
      </Paper>
    </Box>
  )
}

export default CategoryPaper
