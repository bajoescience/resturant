import { Form, useNavigate, useOutletContext } from "react-router-dom"
import UserForm from "../components/UserForm";
import MenuButton from "../components/MenuButton";
import ReservationForm from "../components/ReservationForm";
import userService from "../services/users";
import reservationService from "../services/reservations";

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
      if (!user) {
        const newUser = await handleUsersubmit(data)
        if (!newUser) return
      }

      const date = data.get('date')
      const time = data.get('time')
      const persons = data.get('persons')
      const reservation = data.get('reservation')

       // Reservation details must be complete
       if (!date || !persons || !time) {
        console.log('Reservation details not complete');
        return
       }

       const reservationObj = { date, reservation, time, persons, creatorId: user.id}

       await reservationService.create(reservationObj)

       navigate('/resturant/users/' + user.id)
    }
    return (
        <>
          <h3>This is the Reservation page</h3>
          <div>
              <MenuButton />
          </div>
          <div>
            <Form  onSubmit={handleSubmit} >
              <div>
                {
                  user 
                  ? <h4>Hello {user.firstName}</h4>
                  :  <UserForm />
                }
              </div>
              <div>
                <ReservationForm />
              </div>
              <button>Reserve</button>
            </Form>
          </div>
        </>
    )
}

export default Reservation