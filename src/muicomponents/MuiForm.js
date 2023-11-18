import React from 'react'
import { Form } from 'react-router-dom'
import UserForm from '../components/UserForm'
import ReservationForm from '../components/ReservationForm'
import { Button, Stack, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'

const MuiForm = ({user, handleSubmit}) => {
  return (
    <Form  onSubmit={handleSubmit} >
      <Typography variant="h4" component={'div'} fontWeight={'bold'}>
        {user && 'New'} Reservation
      </Typography>
      <Stack spacing={8} m={1} pt={2}  pl={{xs: 0, sm: 7,  md: 15, lg: 25}} pr={{xs: 0, sm: 7, md: 15, lg: 25}} >
        {
            user 
            ? <Typography variant='h5'>Hello {user.firstName}</Typography>
            :  <UserForm />
        }
        <LocalizationProvider>
        <ReservationForm />
        </LocalizationProvider>
      </Stack>
      <Button color='secondary' type='submit'>Reserve</Button>
      
    </Form>
  )
}

export default MuiForm