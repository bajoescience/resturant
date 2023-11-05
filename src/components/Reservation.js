import { AddBox } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";


const Reservation = ({reservation, cancelReservation, modifyReservation}) => {
    const {persons, time, date} = reservation

    // Handle update with another route and using
    // Action of that route

    return (
        <>
            <Stack p={1} spacing={1}>
                <Box>
                    <Typography variant="body2">
                        This reservation is for {persons} persons at {time} on {date} created by you
                    </Typography>
                </Box>
                <Box>
                    <Button onClick={cancelReservation} color="inherit">Cancel</Button>
                    <Button onClick={modifyReservation} color="inherit">Modify</Button>
                </Box>                
            </Stack>
        </>
    )
}

export default Reservation