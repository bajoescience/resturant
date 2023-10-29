

const ReservationForm = ({defaults}) => {
  // If default object exists, populate the form with it's properties
  const reservation = defaults?.reservation || ''
  const date = defaults?.date || ''
  const time = defaults?.time || ''
  const persons = defaults?.persons || ''
    
    return (
        <>
           {/**Make a Reservation here */}
              <div>
                Extra details: <input name='reservation' defaultValue={reservation} placeholder="Reservation Details" />
              </div>
            {/**Date Input */}
              <div>
                Date: <input name='date' defaultValue={date} placeholder="Date" type="date" />
              </div>
              <div>
                Time: <input name='time' defaultValue={time} type="time" />
              </div>
              <div>
                Number Of People: <input name='persons' defaultValue={persons} type="number" max={16} min={1} />
              </div>
        </>
    )
}

export default ReservationForm