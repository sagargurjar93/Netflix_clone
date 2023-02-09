import { Button, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import PNG from './netflix-logo-png-2562.png'
import './Third.css';
import CheckIcon from '@mui/icons-material/Check';
import Secfot from './Secfot'



function Third() {
 
  return (
    <div className='third'>
        <nav>
        <Link to="/"><img src={PNG} className="Third__img"></img></Link>
        <div>
          <h1 className='third__btn'>Sing Out</h1>
        </div>
      </nav>
      
      <div className='third__div'>

        <Stack spacing={2} className="third__div1">
          <Button color='error'>{<CheckIcon/>}</Button>
            <Typography>STEP 2 OF 3</Typography>
            <h1 >Welcome back!</h1>
            <Typography CheckIcon={<CheckIcon/>}>No commitments, cancel anytime.</Typography>
            <Typography CheckIcon={<CheckIcon/>}>Everything on Netflix for one low price.</Typography >
            <Typography CheckIcon={<CheckIcon/>}>No ads and no extra fees. Ever.</Typography >
            <Link to="/Fourth"><Button  variant='contained' color='warning' className='btn'>Next</Button></Link>
        </Stack>
      
      </div>

     <Secfot></Secfot>
    </div>
  )
}

export default Third