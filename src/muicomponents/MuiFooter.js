import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiFooter = ({locations}) => {
  return (
    <Stack 
      bgcolor={'#666666'} 
      color={'primary.main'} 
      width={'100%'} 
      spacing={1}
      sx={{
        textAlign: 'center',
        paddingTop: 3,
        paddingBottom: 3
      }}>
        <Typography variant='body2'>
          {locations.address}
        </Typography>
        <Typography variant='body2'>
          PHONE: {locations.phone}
        </Typography>
        <Typography variant='body2'>
          Powered By JSON
        </Typography>
    </Stack>
  )
}

export default MuiFooter