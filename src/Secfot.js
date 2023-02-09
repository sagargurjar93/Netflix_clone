import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { TextField, Autocomplete, Stack } from '@mui/material'
import './Second.css'

function Secfot() {
    const Language = ["hindi", "english"]
    const[data, setdata]=useState(null)
    const handelChange=(e,u)=>{
      setdata(u)
    }
  return (
    <div className='second__footer'>
        <h3>Questions? Contact us.</h3>

        <div className='second__row'>
            <div className='second__col'>
                <Link to="">FAQ</Link>
                <Link to="">Help Center</Link>
                <Link to="">Netflix Shop</Link>
                <Link to="">Terms of Use</Link>
            </div>

            <div className='second__col'>
                <Link to="">Privacy</Link>
                <Link to="">Cookie Preferences</Link>
                <Link to="">Corporate Information</Link>
            </div>

           
        </div>
        <button className='language__btn' ><Stack spacing={2} width="25vh" height="5vh">
            <Autocomplete
            options={Language}
            renderInput={v => <TextField {...v} label="English"/> }
            value={data}
            onChange={handelChange}
            />
        </Stack></button>
    </div>
  )
}

export default Secfot