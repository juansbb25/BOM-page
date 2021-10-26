import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
const SearchBar = () => {
  return (
    <Paper
      elevation={12}
      component='form'
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        width: { xs: 300, md: 800, lg: 1000 },
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder='Search' />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
