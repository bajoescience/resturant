import { useLoaderData, useNavigate} from "react-router-dom"
import Reservation from "../components/Reservation"
import ReserveButton from "../components/ReserveButton"
import reservationService from "../services/reservations"
import { useState } from "react"

const User = () => {
  const navigate = useNavigate()
    // First we check if the username is a valid user
    const {user, reservations: reservationList} = useLoaderData()

    const [reservations, setReservations] = useState(reservationList)

    // Delete the reservation
    const cancelReservationOf = async (id) => {

      const status = await reservationService.remove(id)
      if (status !== 200) return 

      // Update state to automatially sync UI
      setReservations(reservations.filter(r => r.id !== id))
    }

    const modifyReservationOf = (id) => {
      // TODO
      navigate('/resturant/reservation/' + id + '/edit')
  }

  const NoReservation = () => {
    return (
      <div>
        <p>You do not have any reservations currently</p>
      </div>
    )
  }

    return (
        <>
          <h2>This is {user.firstName}'s page</h2>
          {/**Render all reservations belonging to the user */}
          <div>
            {reservations.length === 0 ? <NoReservation /> :reservations.map(reservation => <Reservation 
              key={reservation.id}
              cancelReservation={() => {cancelReservationOf(reservation.id)}}
              modifyReservation={() => {modifyReservationOf(reservation.id)} }
              reservation={reservation}/>
            )}
          </div>
          <div>
            <div>
              <ReserveButton text={'Make a new Reservation'}/>
            </div>
          </div>
        </>
    )
}

export default User