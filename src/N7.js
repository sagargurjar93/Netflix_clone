import React from 'react';
import { Link } from 'react-router-dom';
import PNG from './netflix-logo-png-2562.png';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Button, Typography } from '@mui/material';
import './Fourth.css';
import LockIcon from '@mui/icons-material/Lock';
import Secfot from './Secfot';
function N7() {
  return (
    <div>
         <nav>
        <Link to="/"><img src={PNG} className="Fourth__img"></img></Link>
        <div>
          <h1 className='fourth__btn'>Sing Out</h1>
        </div>
      </nav>
      <div className='fifth__stack'>
      <Typography>{<LockResetIcon/>}</Typography>
      <Typography>STEP 2 OF 2</Typography>
      <Typography variant='h5'>Choose how to pay</Typography>
      <Typography>Your payment is encrypted and you can change <br/> how you pay anytime.</Typography>
      <Typography>Secure for peace of mind.</Typography>
      <Typography>Cancel easily online.</Typography>
      </div>
      <p className='Nptag'>End-to-end encrypted{<LockIcon/>}</p>
      <Link to="/Payment"><button className='btn__n7'>Credit or Debit Card
      <img alt="VISA" className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg' />
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg' />
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg'/>
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_dinersclub_v2.png'/>
      </button></Link>

      <Link to="/Payment2"><button className='btn__n'>UPI AutoPay
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bhim-upi.svg'/>
      <img className='logo__visa' src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/paytm.svg"/>
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/phonepe.svg'/>
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amazonpay.svg'/>
      <img className='logo__visa' src='https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/gpay.svg'/>
      </button></Link>

      <Secfot></Secfot>
    </div>
  )
}

export default N7