import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

// This function acts as a container for the app
// Such that functions can be created here and be passed
// To the rest of the app to keep things neat and tidy
const App = () => {

  // In order to create a micro frontend
  // Every route will handle it's own state
  // This component is simply a container for the whole app
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUser = localStorage.getItem('knownUser')

    if (loggedUser) {
      const userToSave = JSON.parse(loggedUser)
      setUser(userToSave)
    }
  }, [])
  

  // Object to pass data to lower route components
  const context = {
    app: {
      data: 'This are details from the App component',
    },
    user,
    setUser
  }

  return (
    <>
      {/** Every route has the same Navbar, so Navbar comes here */}
      <div>
        <NavBar user={user} />
      </div>
      <div>
        <Outlet context={context}/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
  
}

export default App;
