import { TextField, Stack, InputAdornment } from "@mui/material"
import {AccountCircle, Email, MoreHoriz, Phone, Home} from '@mui/icons-material'


// Render the form to save user details
const UserForm = () => {
  const variant = true

    return (
        <Stack spacing={4} >
          <Stack direction={'row'} spacing={{xs: 4, sm: 12}}>
            <TextField 
              label='First Name' 
              name="firstname" 
              type="text" 
              required
              fullWidth 
              variant={variant ? 'standard' : 'filled'}
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <MoreHoriz />
                  </InputAdornment>
                )
              }}
            />
            <TextField 
              label='Last Name' 
              name='lastname' 
              type='text' 
              required
              fullWidth 
              variant={variant ? 'standard' : 'filled'}
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <MoreHoriz />
                  </InputAdornment>
                )
              }}
            />
          </Stack>
          <Stack direction={'row'} spacing={{xs: 4, sm: 12}}>
            <TextField 
              label='Username' 
              name="username" 
              color="secondary" 
              type="text" 
              required
              fullWidth 
              variant= {variant ? 'standard' : 'filled'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
            <TextField 
              label='Email' 
              type='email' 
              name="email"
              fullWidth 
              required
              variant={variant ? 'standard' : 'filled'}
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                )
              }}
           />
          </Stack>
          <Stack direction={'row'} spacing={{xs: 4, sm: 12}}>
            <TextField 
              label='Address' 
              name="address" 
              type="text"
              required 
              fullWidth 
              variant={variant ? 'standard' : 'filled'}
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Home />
                  </InputAdornment>
                )
              }}
            />
            <TextField 
              label='Phone Number' 
              name='phonenumber' 
              type='phonenumber' 
              fullWidth 
              variant={variant ? 'standard' : 'filled'} 
              color="secondary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                )
              }}
            />
          </Stack>
        </Stack>
    )
}

export default UserForm