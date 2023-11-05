import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const ReserveButton = ({text}) => {
    const navigate = useNavigate()
    const reserve = () => {
        navigate('/resturant/reservation')
    }
    return (
        <>
          {/**Reserve now button */}
          <Button variant="outlined" onClick={reserve} color="inherit">
            {text || 'Reserve Now!!!'} 
          </Button>
        </>
    )
}

export default ReserveButton