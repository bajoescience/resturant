import { Link } from "react-router-dom"

// The navbar position is always fixed no matter how we scroll
const NavBar = ({user}) => {
    return (
        <>
          <div>
            <ul>
              <span>
                <li id="homeRoute">
                  <Link to={''}><h2> Joe Resturant</h2></Link>
                </li>
              </span>
              <span>
                <li><Link to={'menu'}>Menus</Link></li>
                <li><Link to={'location'}>Hours and Locations</Link></li>
                <li><Link to={'about'}>About Us</Link></li>
                {user && <li><Link to={'/resturant/users/' + user.id}>Your Reservations</Link></li>}
                <li><Link to={'reservation'}>Reserve</Link></li>
              </span>
            </ul>
          </div>
        </>
    )
}

export default NavBar
