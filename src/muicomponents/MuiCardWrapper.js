import { Box, Paper, Typography } from "@mui/material"
import Menu from "../components/Menu"
import ReserveButton from "../components/ReserveButton"

const MuiCardWrapper = ({menu}) => {
  return (
    <Box 
    bgcolor={'secondary.main'} 
    color={'primary.main'} 
    p={5} 
    pr={20}
    pl={20}
    textAlign={'center'}>
        <Paper
        elevation={8}
        sx={{
            backgroundColor: 'primary.main', 
            color: 'secondary.main',
            pt: 5,
            pb: 5,
            pr: 1,
            pl: 1
        }}>
            {menu?.map(m => <Menu key={m.id} menu={m}/>)}
            <ReserveButton />
        </Paper>
    </Box>
  )
}

export default MuiCardWrapper