import { redirect } from "react-router-dom"
import menuService from "../services/menus"
import reservationService from "../services/reservations"
import userService from '../services/users'

const menusLoader = async () => {
    return await menuService.getAll()
}

const userLoader = async ({params}) => {
    // Check if the user really exists in database
    const {userId} = params
    const user = await userService.getOne(userId)
    if (!user) throw Error('User not found');

    // Check for all reservations belonging to the user
    const reservations = await reservationService.getAll()
    const userReservations = reservations.filter(r => r.creatorId === user.id)
    
    const data = {user, reservations: userReservations}
    
    return data
}

// Redirect users
const usersRedirect = async ({params}) => {
    return redirect('/')
}

const loadReservationToEdit = async ({params}) => {
    const {reservationId: id} = params
    const reservation = await reservationService.getOne(id)
    return reservation
}



export default {menusLoader, userLoader, usersRedirect, loadReservationToEdit}