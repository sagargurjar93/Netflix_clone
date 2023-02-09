import { Typography, Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import PNG from './netflix-logo-png-2562.png';
import './Fourth.css';
import CheckIcon from '@mui/icons-material/Check';
import Secfot from './Secfot';

function Fifth() {
  return (
    <div>
         <nav>
        <Link to="/"><img src={PNG} className="Fourth__img"></img></Link>
        <div>
          <h1 className='fourth__btn'>Sing Out</h1>
        </div>
      </nav>
      <div className='fifth__stack'>
      <Stack spacing={2}>
      <Typography>{<CheckIcon/>}</Typography>
      <Typography>STEP 2 OF 2</Typography>
      <Typography variant='h5' fontSize={30}>One last thing.</Typography>
      <Typography>Before we restart your membership,<br/>
                 you'll need to set up a payment <br/>
                  method.<br/>
                 As always, you can cancel online <br/>at any time.
      </Typography>
      </Stack>
      </div>
      <Link to="/N7"><button className='fifth_b'>Next</button></Link>

      <Secfot></Secfot>
    </div>
  )
}

export default Fifth