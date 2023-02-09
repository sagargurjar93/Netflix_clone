import React from 'react';
import { Link } from 'react-router-dom';
import PNG from './netflix-logo-png-2562.png';
import { TextField, MenuItem, Box, Button,  } from '@mui/material';
import './Payment.css'
import { Stack } from '@mui/system';
import Secfot from './Secfot';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Payment2() {
  return (
    <div>
         <nav>
        <Link to="/"><img src={PNG} className="payment__img"></img></Link>
        <div>
          <h1 className='payment__btn'>Sing Out</h1>
        </div>
      </nav>
      <div className='payment__div'>
        <p>STEP 2 OF 2<br/>
           <b> Set up UPI AutoPay</b></p>
           <p>You can change this recurring payment any time in your settings.</p>
       </div>

       <div className='payment__Div'>
      
           <Box width="50vh" >
           <Stack spacing={3}>
            <TextField label="Select your UPI ID"  select fullWidth>
                <MenuItem value="india">
                    <img className='logo' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bhim-upi.svg'/>
                    BhIM UPI</MenuItem>
                <MenuItem value="usa">
                    <img className='logo' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/paytm.svg'/>
                    Paytem</MenuItem>
                <MenuItem value="uk">
                    <img className='logo' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/phonepe.svg'/>
                    phonepe</MenuItem>
                <MenuItem value="napal">
                    <img className='logo' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amazonpay.svg'/>
                    amazonpay</MenuItem>
                <MenuItem value="napal">
                    <img className='logo' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/gpay.svg'/>
                    google Pay</MenuItem>
                <MenuItem value="napal">
                  {<MoreHorizIcon/>}
                  other</MenuItem>
            </TextField>
            <TextField label="UPI ID"/>
            </Stack>
      </Box>
      
      <Link>How do I find my UPI ID</Link>
      </div>
      <div className='But'>
      <Button variant="outlined" color="error" width="20vh">Next</Button>
      </div>
      <Secfot></Secfot>
    </div>
  )
}

export default Payment2