import { Box, Paper, Typography } from "@mui/material"
import Menu from "../components/Menu"
import ReserveButton from "../components/ReserveButton"

const MuiCardWrapper = ({menu}) => {
  return (
    <Box 
    bgcolor={'secondary.main'} 
    color={'primary.main'} 
    p={5} 
    pr={{xs: 5, sm: 10, md: 20}}
    pl={{xs: 5, sm: 10, md: 20}}
    textAlign={'center'}>
        <Paper
        elevation={8}
        sx={{
            backgroundColor: 'primary.main', 
            color: 'secondary.main',
            pt: {xs: 5},
            pb: {xs: 5},
            pr: {xs: 1},
            pl: {xs: 1}
        }}>
            {menu?.map(m => <Menu key={m.id} menu={m}/>)}
            <ReserveButton />
        </Paper>
    </Box>
  )
}

export default MuiCardWrapper