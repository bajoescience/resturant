import { Box, Typography } from "@mui/material"

const Menu = ({menu}) => {


  return (
    <>
      {/** Display the menu of the appropiate route */}
      <Box p={2}>
        <Typography variant="body1" whiteSpace={4} fontWeight={'bold'} component={'div'}>
          {menu.name} <Typography component={'span'} fontWeight={'bolder'} >{menu.id}</Typography>
        </Typography>
        <Typography variant="body2" fontWeight={'light'} component={'div'}>
          {menu.ingredients}
        </Typography>
      </Box>
      <br></br>
    </>
  )
}

export default Menu