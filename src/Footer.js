import React from 'react'
import './Footer.css'
import buttonpng from './down-icon.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <h2>Questions? Call 000-800-919-1694</h2>

        <div className='row'>
            <div className='col'>
                <Link to="">FAQ</Link>
                <Link to="">INVESTOR RELATIONS</Link>
                <Link to="">PRIVACY</Link>
                <Link to="">SPEED TEST</Link>
            </div>

            <div className='col'>
                <Link to="">Help Center</Link>
                <Link to="">Jobs</Link>
                <Link to="">Cookies Preferences</Link>
                <Link to="">Legel Notice</Link>
            </div>

            <div className='col'>
                <Link to="">Account</Link>
                <Link to="">Ways to watch</Link>
                <Link to="">Corporate Information</Link>
                <Link to="">Only in Netflix</Link>
            </div>

            <div className='col'>
                <Link to="">Media Center</Link>
                <Link to="">Terms of use</Link>
                <Link to="">Contact Us</Link>

            </div>
        </div>
        <button className='language__btn'>English <img src={buttonpng} /> </button>
    </div>
  )
}

export default Footer