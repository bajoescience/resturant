import MuiNavbar from "../muicomponents/MuiNavbar"

// The navbar position is always fixed no matter how we scroll
const NavBar = ({user, viewportWidth}) => {
    return (
        <>
          <MuiNavbar user={user} viewportWidth={viewportWidth}/>
        </>
    )
}

export default NavBar
