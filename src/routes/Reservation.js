import { useNavigate, useOutletContext } from "react-router-dom"
import MenuButton from "../components/MenuButton";
import userService from "../services/users";
import reservationService from "../services/reservations";
import { Stack } from "@mui/material";
import MuiForm from "../muicomponents/MuiForm";

const Reservation = () => {
    const navigate = useNavigate()

    const {user, setUser} = useOutletContext()


    // TODO: allow this function to call /users/create
    // To save a user to database
    // This function returns true if succesfull but else returns false
    const handleUsersubmit = async (data) => {

      const username = data.get('username')
      const lastName = data.get('lastname')
      const firstName = data.get('firstname')
      const address = data.get('address')
      const phoneNumber = data.get('phonenumber')
      const email = data.get('email')

      // User must input lastName, firstName, address, phoneNumber, email
      if (!username ||!firstName || !lastName || !address || !email)
       {
        console.log('User details not complete ');
        return
       }

      const newUser = await userService.create({username, lastName, firstName, email, address, phoneNumber})
      if (!newUser) return
      
      localStorage.setItem(
        'knownUser', JSON.stringify(newUser)
      )

      setUser(newUser)
      return newUser
    }
    const handleSubmit = async (e) => {
      const data = new FormData(e.currentTarget)

      // Handle how to create reservation without user
      const creator = user || await handleUsersubmit(data)

      const date = data.get('date')
      const time = data.get('time')
      const persons = data.get('persons')
      const reservation = data.get('reservation')

       // Reservation details must be complete
       if (!date || !persons || !time) {
        console.log('Reservation details not complete');
        return
       }

       console.log(user, creator);
       const reservationObj = { date, reservation, time, persons, creatorId: creator.id}

       await reservationService.create(reservationObj)

       navigate('/resturant/users/' + creator.id)
    }
    return (
        <Stack textAlign={'center'} spacing={2} p={4}>
          <MuiForm user={user} handleSubmit={handleSubmit}/>
          <MenuButton />
        </Stack>
    )
}

export default Reservation