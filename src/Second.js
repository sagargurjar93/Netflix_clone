import React,{useState} from 'react'
import './Second.css'
import PNG from './netflix-logo-png-2562.png'
import { Link } from 'react-router-dom'
import buttonpng from './down-icon.png'
import { Button } from '@mui/material'
import {Autocomplete, TextField, Stack} from '@mui/material'
import Secfot from './Secfot'
// import LanguageIcon from '@mui/icons-material/Language';


function Second(props) {

  return (
    <div className='second'>
      <nav>
        <Link to="/"><img src={PNG} className="second__img"></img></Link>
        <div>
          <h1 className='second__btn'>Sing In</h1>
        </div>
      </nav>
      <hr/>

      <div className='second__content'>
        <p className='second__ptag'>Step 1 of 3</p>
        <h2 className='second__ptag'>Welcome back!
        Rejoining Netflix is easy.</h2>
        <p className='second__ptag'>Enter your password and you'll be watching in no time.</p>
        <p className='second__email'>Email</p>
        <p>{props.email}</p>
        <input type="password" helperText= "Enter" className="second__pass" label="Enter"></input>

        <Link><p className='second__forgot'>Forgot your password?</p></Link>
        <div >
        <Link to="/third" className='second_b'><Button variant='contained' color='warning'>Next</Button></Link>
        </div>
        
      </div>   

    <Secfot></Secfot>
    </div>
  )
}

export default Second