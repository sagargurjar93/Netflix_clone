import React, {useState} from 'react'
import PNG from './netflix-logo-png-2562.png'
import './Home.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

import Features from './Features'
import { Button, TextField, Autocomplete } from '@mui/material'
import { Stack } from '@mui/system'
function Home(props) {
  const Language = ["hindi", "english"]
  const[data, setdata]=useState(null)
  const handelChange=(e,u)=>{
    setdata(u)
  }
  console.log(props.email)
  return (
    <div className='home'>

      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg" className='header__img'></img>
      
      <nav>
        <img src={PNG} className="home__logo" />
        <div>
         <button className=''> 
         <Stack spacing={2} width="10vh" height="5vh">
            <Autocomplete
            options={Language}
            renderInput={v => <TextField {...v} label=""/> }
            value={data}
            onChange={handelChange}
            />
        </Stack> </button>
         <button>Sing In</button>
        </div>
      </nav>


      <Stack spacing={3}>
      <div className='header__content'>
         <h1>Unlimited movies, TV shows and more.</h1>
         <h3>Watch anywhere. Cancel anytime.</h3>
         <Stack direction="row" >
         <TextField onChange={(e)=>props.setEmail(e.target.value)} label="Email address" className='textfild'/>
        <Link to="/Second"><Button variant='contained' color='warning' className='button'>Restart your membership</Button>  </Link>
        </Stack>
      </div>
      </Stack>
     
     
      <Features></Features>
      <Footer></Footer>

    </div>
  )
}

export default Home