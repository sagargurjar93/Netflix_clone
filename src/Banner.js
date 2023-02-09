import React from 'react'
import Row from './Row'
import './Row.css'

function Banner() {
  
  return (
    <div>
        <img className='banner__img' src="https://source.unsplash.com/random"/>

      <nav>
        <h1 className='row__tital'>Movie Name</h1>
        <div className='row__buttons'>
            <button className='row__button'>Paly</button>
            <button className='row__button'>My List</button>
        </div>


      </nav> 

      {/* <Row></Row> */}
    </div>
  )
}

export default Banner