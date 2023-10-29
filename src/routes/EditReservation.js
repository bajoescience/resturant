import { Form, useLoaderData, useNavigate } from "react-router-dom";
import ReservationForm from "../components/ReservationForm"
import reservationService from "../services/reservations";

const EditReservation = () => {
  const navigate = useNavigate()

  // Use loader to get the reservation from database
  const reservations = useLoaderData()
  const {reservation, date, time, persons, id, creatorId} = reservations

  // Set the reservation to change as default form field values
  const defaults = {
    reservation,
    date,
    time,
    persons
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    // Fetch the new reservation details
    const data = new FormData(e.currentTarget)
    const newReservation = data.get('reservation')
    const newDate = data.get('date')
    const newTime = data.get('time')
    const newPersons = data.get('persons')
    
    // Confirm the important data exists
    if (!newDate || !newTime || !newPersons) 
    {
      console.error('Reservation details not complete');
      return
    }

    const newReservationObj = {
      ...reservations,
      reservation: newReservation,
      date: newDate,
      time: newTime,
      persons: newPersons
    }
    
    // Update the new Reservation to database
    await reservationService.update(id, newReservationObj)
    navigate('/users/' + creatorId)
  }
    return (
        <>
          <div>
            <Form onSubmit={handleSubmit}>
              <ReservationForm defaults={defaults} />
              <div>
                <button>Change</button>
              </div>
            </Form>
          </div>
        </>
    )
}

export default EditReservation