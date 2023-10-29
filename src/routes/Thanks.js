import { useNavigate, useParams } from "react-router-dom"

const Thanks = () => {
    const params = useParams()
    const username = params.username
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/users/' + username)
    }, 3000)
    return (
        <>
          <h2>Thank You {params.username} for your reservation</h2>
        </>
    )
}

export default Thanks