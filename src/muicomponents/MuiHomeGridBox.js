import React from 'react'
import { Grid, Box, Typography, Stack } from '@mui/material'
import MenuButton from '../components/MenuButton'

const DisplayText = ({item}) => {
  return (
    <Box p={10}>
      <Typography 
          variant='h4'  
          component={'div'}
          gutterBottom>
            {item.title  || 'We Are Cuisine'}
        </Typography> 
        <Typography variant='body2'>{item?.text}</Typography>
        <MenuButton />
    </Box>
  )
}

const DisplayImage = ({item}) => {
  const image = () => {
    return (
      <>
        <Box
          component={'img'}
          src={item.src}
          height={'98vh'} 
          width={'48.6vw'} 
          alt={item.alt}
        />
      </>
    )
  }
  return (
    <Box>
      {/**Display the image here */}
      {image()}
    </Box>
  )
}

export const MuiHomeGridBox = ({item, index}) => {
  const id = index + 1
  const stackDirection = id%2 !== 0 ? 'row' :'row-reverse'
  return (
    <>
      <Stack direction={stackDirection}>
      <Grid item xs={12} sm={6} >
        <DisplayText item={item} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DisplayImage item={item} />
      </Grid>
      </Stack>
    </>
  )
}
