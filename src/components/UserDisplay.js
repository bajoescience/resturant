// This is to display the user details on /:username route

import { Outlet } from "react-router-dom"

const UserDisplay = () => {
    return (
        <>
          <Outlet />
        </>
    )
}

export default UserDisplay