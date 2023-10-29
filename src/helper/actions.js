import userService from '../services/users'
import reservationService from '../services/reservations'
import { redirect } from "react-router-dom"


const createUser = async (formData) => {
  const username = formData.get('username')
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const address = formData.get('address')
    const phoneNumber = formData.get('phoneNumber')

    const userToCreate = {username, firstName, lastName, email, address, phoneNumber}

    // Save user details to browser memory
    const newUser = await userService.create(userToCreate)
    if (newUser) {
      localStorage.setItem(
        'knownUser', JSON.stringify(newUser)
      )
    }
    return newUser
}

const reservationCreator = async ({request}) => {
    const formData = await request.formData()
    
    // If the user is not saved, create user
    // Else get user from local storage
    const savedUser = localStorage.getItem('knownUser')
    const creator = savedUser
      ? JSON.parse(savedUser)
      : await createUser(formData)

    // Create reservation
    const date = formData.get('date')
    const time = formData.get('time')
    const persons = formData.get('persons')
    const reservation = formData.get('reservation')

    const reservationObj = {date, reservation, time, persons, creatorId: creator.id}
    await reservationService.create(reservationObj)
    
    // TODO: Redirect function not working!!!
    return redirect('/reservation')
}

export default {reservationCreator}