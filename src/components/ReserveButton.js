import { useNavigate } from "react-router-dom"

const ReserveButton = ({text}) => {
    const navigate = useNavigate()
    const reserve = () => {
        navigate('/resturant/reservation')
    }
    return (
        <>
          {/**Reserve now button */}
          <button onClick={reserve}>
            {text || 'Reserve Now!!!'} 
          </button>
        </>
    )
}

export default ReserveButton