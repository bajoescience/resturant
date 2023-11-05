import { useLoaderData, useNavigate} from "react-router-dom"
import Reservation from "../components/Reservation"
import ReserveButton from "../components/ReserveButton"
import reservationService from "../services/reservations"
import { useState } from "react"
import { Box, Stack, Typography } from "@mui/material"

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
      <Box p={4}>
        <Typography>You Do Not Have Any Reservations Currently</Typography>
      </Box>
    )
  }

    return (
        <Box p={2}>
          <Typography variant="h4" component={'div'} p={2} fontWeight={'bold'}>
            Hi {user.firstName}
          </Typography>
          <Typography variant="subtitle1" component={'div'} p={2} fontWeight={'bold'}>
            Your Reservations
          </Typography>
          {/**Render all reservations belonging to the user */}
          <Stack spacing={4}>
            {reservations.length === 0 
            ? <NoReservation /> 
            :reservations.map(reservation => <Reservation 
              key={reservation.id}
              cancelReservation={() => {cancelReservationOf(reservation.id)}}
              modifyReservation={() => {modifyReservationOf(reservation.id)} }
              reservation={reservation}/>
            )}
          </Stack>
          <div>
            <Box p={1}>
              <ReserveButton text={'Make a new Reservation'}/>
            </Box>
          </div>
        </Box>
    )
}

export default User