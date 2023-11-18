import React from 'react'
import { Grid, Box, Typography} from '@mui/material'
import MenuButton from '../components/MenuButton'

const DisplayText = ({item}) => {
  return (
    <Box p={{xs: 2, sm: 5, md: 10}}>
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
          height={{xs: '80vh', md: '95vh'}} 
          width={{xs: '90vw',md: '48.6vw'}} 
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

export const MuiHomeGridBox = ({item, index, outlet}) => {
  const {viewportWidth} = outlet

  const id = index + 1

  // For the mobile version, the grid should not alternate 
  // Between row and row-reverse meaning the stack direction variable
  // is alaways true for mobile devices, else alternate row directions
  // on each row.
  const stackDirection = viewportWidth < 900 ? true: id%2 !== 0
  return (
    <>
      {/**Render differnet arrangement for smaller devices */}
      {stackDirection 
      ? (
        <>
          <Grid item xs={12} md={6} >
            <DisplayText item={item} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DisplayImage item={item} />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} md={6} >
            <DisplayImage item={item} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DisplayText item={item} />
          </Grid>
        </>
      )
     }
    </>
  )
}
