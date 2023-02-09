import { Button, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import PNG from './netflix-logo-png-2562.png';
import './Payment.css'
import Secfot from './Secfot';

function Payment() {
    const[value,setvalue]=useState("")
  return (
    <div>
         <nav>
        <Link to="/"><img src={PNG} className="payment__img"></img></Link>
        <div>
          <h1 className='payment__btn'>Sing Out</h1>
        </div>
      </nav>
      <div className='payment__div'>
      <Typography>STEP 2 OF 2</Typography>
      <Typography variant='h4'>Set up your credit or debit <br/>card</Typography>
      <Typography>
      <img alt="VISA" className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg' />
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg' />
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg'/>
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_dinersclub_v2.png'/>
      </Typography>
      <Stack direction="column" spacing={2} width="50vh">
      <TextField 
      label="Fist name"
      helperText={!value ? "required":"fist name"}
      />
      <TextField label="Last name"/>
      <TextField label="Card number"/>
      <TextField label="Expiration Date"/>
      <TextField label="Secourty code"/>
      </Stack>
      <div className='change'>
        <h3>$199</h3>
        <p>Basic plan</p>
        <Link to="Fourth"><div className='cng'><Button>Change</Button></div></Link>
      </div>
      </div>
      <div className='ptag'>
      <p>Any payment above ₹ 2000 shall need additional authentication.</p>
      <br/>
      <p>By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹ 199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
      </div>
      <div className='But'>
      <Link to="/Banner"><Button variant="outlined" color="error"  >Start Membership</Button></Link></div>

      <Secfot></Secfot>
    </div>
  )
}

export default Payment