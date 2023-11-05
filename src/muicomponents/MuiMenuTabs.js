import { Grid, Typography } from '@mui/material'

const MuiMenuTabs = ({handleClick, selectedValue}) => {

  const menuTabstyle = {
    color: 'secondary.main',
    backgroundColor: 'primary.main'
  }

  const selectedMenuTabStyle = {
    color: 'primary.main',
    backgroundColor: 'secondary.main'
  }

  const selectStyleOf = (string) => {
    return selectedValue !== string ? menuTabstyle : selectedMenuTabStyle
  }
  
  return (
    <>
      <Grid container>
        <Grid item 
          p={3} xs={4} 
          onClick={() => {handleClick('')}} 
          sx={selectStyleOf('')} 
          textAlign={'center'}
          >
            <Typography variant='h6' component={'div'}>Food</Typography>
        </Grid>
        <Grid 
          item p={3} xs={4} 
          onClick={() => {handleClick('drinks')}} 
          sx={selectStyleOf('drinks')}
          textAlign={'center'}>
            <Typography variant='h6' component={'div'}>Drinks</Typography>
        </Grid>
        <Grid item 
          p={3} xs={4} 
          onClick={() => {handleClick('bbq')}} 
          sx={selectStyleOf('bbq')}
          textAlign={'center'}>
            <Typography variant='h6' component={'div'}>BBQ</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default MuiMenuTabs