import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const MenuButton = ({text}) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/resturant/menu')
    }
    return (
        <Box p={3}>
            <Button onClick={onClick} variant="outlined" color="inherit">
              {text || 'View Our Menu'}
            </Button>
        </Box>
    )
}

export default MenuButton