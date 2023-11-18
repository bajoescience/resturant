import { Stack, TextField, InputAdornment } from "@mui/material"
import { MoreHoriz, People, TableRestaurant } from "@mui/icons-material"

const ReservationForm = ({defaults}) => {
  // If default object exists, populate the form with it's properties
  const reservation = defaults?.reservation || ''
  const date = defaults?.date || ''
  const time = defaults?.time || ''
  const persons = defaults?.persons || ''
    
    return (
        <Stack spacing={4}>
          <Stack direction={'row'} spacing={{xs: 8, sm: 12, lg: 16}}>
            <TextField 
              label='Party Size' 
              name="persons" 
              type="number"
              required 
              max={16}
              min={1}
              defaultValue={persons}
              fullWidth 
              variant={'standard'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <People />
                  </InputAdornment>
                )
              }}
              color="secondary"
            />
            <TextField 
              label='Tables' 
              name='table' 
              type='number' 
              fullWidth 
              variant={'standard'} 
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <TableRestaurant />
                  </InputAdornment>
                )
              }}
            />
          </Stack>
          <Stack direction={'row'} spacing={{xs: 8, sm: 12, lg: 16}}>
            <TextField 
              name="date" 
              type="date" 
              required
              fullWidth
              defaultValue={date} 
              variant={'standard'}
              color="secondary"
            />
            <TextField 
              name='time' 
              type='time' 
              required
              fullWidth 
              defaultValue={time}
              variant={'standard'}
              color="secondary"
            />
          </Stack>
            <TextField 
              name="reservation"
              type="text"
              color="secondary"
              defaultValue={reservation}
              label='Extra Details...' 
              fullWidth
              multiline
            />
        </Stack>
    )
}

export default ReservationForm