import { useNavigate } from "react-router-dom"

const MenuButton = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/resturant/menu')
    }
    return (
        <>
            <button onClick={onClick}>
              View Our Menu
            </button>
        </>
    )
}

export default MenuButton