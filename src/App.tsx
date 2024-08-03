import { Box, Typography } from '@mui/material';

import { Routes, Route, Link } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';


export default function App() {

  return (
    <>
      <Box>
        <Typography>The navigation bar here</Typography>
        <Link to={'/signup'}>Signup</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/home'}>Home</Link>
        <Link to={'/schedule'}>Schedule</Link>
      </Box>
      <Routes>
          <Route path='/home' element={<h1>Home page</h1>} />
          <Route path='/schedule' element={<h1>Schedule</h1>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}


