import React from 'react'
import './Fourth.css';
import { Link } from 'react-router-dom';
import PNG from './netflix-logo-png-2562.png'
import { Stack } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import ComputerIcon from '@mui/icons-material/Computer';
import Secfot from './Secfot';

function Fourth() {
  return (
    <div>
         <nav>
        <Link to="/"><img src={PNG} className="Fourth__img"></img></Link>
        <div>
          <h1 className='fourth__btn'>Sing Out</h1>
        </div>
      </nav>
      <Stack spacing={1} className="stack">
        <Typography>STEP 1 OF 2</Typography>
         <Typography variant='h5'>Choose the plan that’s right for you</Typography>
         <Typography>Watch all you want. Ad-free.</Typography>
         <Typography>Recommendations just for you.</Typography>
         <Typography>Change or cancel your plan anytime.</Typography>
      </Stack>

      <div className='Div'>
    
    <Button><div className='div'>Mobile</div></Button>

    <Button><div className='div'>Basic</div></Button>

    <Button><div className='div'>Standerd</div></Button>

    <Button><div className='div'>Primum</div></Button>
      
      </div>

      <Stack>
      <Stack direction='row' spacing={7} className="Div2">
        <Typography>Monthly price</Typography>
        <Typography>149</Typography>
        <Typography>199</Typography>
        <Typography>499</Typography>
        <Typography>449</Typography>
      </Stack>
      </Stack>

      <Stack>
      <Stack direction='row' spacing={10} className="Div2">
        <Typography> Video quality</Typography>
        <Typography>Good</Typography>
        <Typography>Good</Typography>
        <Typography>Better</Typography>
        <Typography>Best</Typography>
      </Stack>
      </Stack>

      <Stack>
      <Stack direction='row' spacing={10} className="Div2">
        <Typography>Resolution</Typography>
        <Typography>480p</Typography>
        <Typography>720p</Typography>
        <Typography>1080p</Typography>
        <Typography>4K+HDR</Typography>
      </Stack>
      </Stack>

      <Stack>
      <Stack direction='row' spacing={10} className="Div2">
        <Typography>Devices you can use to watch</Typography>
        <Typography>{<PhoneIphoneIcon/>}phone</Typography>
        <Typography>{<PhoneIphoneIcon/>}{"phone"}</Typography>
        <Typography>{<PhoneIphoneIcon/>}{"phone"}</Typography>
        <Typography>{<PhoneIphoneIcon/>}{"phone"}</Typography>
      </Stack>
      </Stack>

      <Stack>
      <Stack direction='row' spacing={10} className="Div">
        <Typography>{<TabletIcon/>}</Typography>
        <Typography>{<TabletIcon/>}</Typography>
        <Typography>{<TabletIcon/>}</Typography>
        <Typography>{<TabletIcon/>}</Typography>
      </Stack>
      </Stack>

      <Stack>
      <Stack direction='row' spacing={9} className="Div">
        <Typography></Typography>
        <Typography>{<ComputerIcon/>}</Typography>
        <Typography>{<ComputerIcon/>}</Typography>
        <Typography>{<ComputerIcon/>}</Typography>
      </Stack>
      </Stack>

      <Stack>
      <Stack direction='row' spacing={9} className="Div">
        <Typography></Typography>
        <Typography>{<ComputerIcon/>}</Typography>
        <Typography>{<ComputerIcon/>}</Typography>
        <Typography>{<ComputerIcon/>}</Typography>
      </Stack>
      </Stack>

      <div className='box'>
      <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
      </div>

      <div className='box2'>
        <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
        </p>
      </div>

      <Link to="/Fifth" ><button className='fourth_b' variant='contained' color='warning'>Next</button></Link>

      <Secfot></Secfot>
    </div>
  )
}

export default Fourth