import { Outlet } from "react-router-dom"
import reservationService from "../services/reservations";


const Reservation = ({reservation, cancelReservation, modifyReservation}) => {
    const {persons, time, date} = reservation

    // Handle update with another route and using
    // Action of that route

    return (
        <>
            <div>
                <div>
                    This reservation is for {persons} persons at {time} on {date} created by you
                </div>
                <div>
                    <button onClick={cancelReservation}>Cancel</button>
                    <button onClick={modifyReservation}>Modify</button>
                </div>                
            </div>
        </>
    )
}

export default Reservation