import {useNavigate, useOutletContext } from "react-router-dom"
import ReserveButton from "../components/ReserveButton"
import MenuButton from "../components/MenuButton"

const About = () => {
    const context = useOutletContext()
    const navigate = useNavigate()
    return (
        <>
          <h2>
            This is the about us page
          </h2>
          <div>
            <div>
              <MenuButton />
            </div>
          </div>
        </>
    )
}

export default About