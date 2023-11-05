import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { MuiHomeGridBox } from './MuiHomeGridBox'

const MuiGrid = ({list}) => {
  const [listToShow, setListToShow] = useState([])
  console.log(listToShow);

  useEffect(() => {
    // Initialize the list state to value in index.js
    if (list) {
      setListToShow(list)
    }
  }, [])

  
  return (
    <Box mt={-0.2}>
      <Grid container>
        {listToShow?.map((item, index) => <MuiHomeGridBox item={item} index={index} key={index} />)}
      </Grid>
    </Box>
  )
}

export default MuiGrid