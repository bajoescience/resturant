import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { MuiHomeGridBox } from './MuiHomeGridBox'

const MuiGrid = ({list, outlet}) => {
  const [listToShow, setListToShow] = useState([])

  useEffect(() => {
    // Initialize the list state to value in index.js
    if (list) {
      setListToShow(list)
    }
  }, [list])

  
  return (
    <Box mt={-0.2}>
      <Grid container>
        {listToShow?.map((item, index) => <MuiHomeGridBox item={item} outlet={outlet} index={index} key={index} />)}
      </Grid>
    </Box>
  )
}

export default MuiGrid