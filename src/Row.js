import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css';
import requests from './requests';

const base_url = "https://api.themoviedb.org/3";

function Row(title, fetchUrl, isLargeRow = false) {
    
    const [movies, setmovies] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const requests = await axios.get(fetchUrl);
            setmovies(requests.data.results)
        }
        fetchData();
    }, [fetchUrl] )
  return (
    <>
    <div>
        <h2>{title}</h2>

        
        {movies.map(movies => (
            <img src={`${base_url}${
                isLargeRow ? movies.poster_path : movies.backdrop_path} `} alt="" />
        ))}
    </div>        

      <div className='row__contents'>
        {/* <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow
        /> */}
        {/* <Row title="Trending now" fetchurl={requests.fetchTrending}  /> */}
        {/* <Row title="Top Ratid" fetchurl={requests.fetchTopRated}/> */}
        {/* <Row title="Action Movies" fetchurl={requests.fetchActionMovies}/> */}
        <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} isLargeRow/>
        {/* <Row title="Horror Movie" fetchurl={requests.fetchNetflixOriginals}/> */}
        {/* <Row title="Romance Movie" fetchurl={requests.fatchRomanceMovie}/> */}
        {/* <Row title="Documentaries" fetchurl={requests.fatchDocumentaries}/> */}

    </div> 
  
    </>
  )
}

export default Row

// style={{
//     backgroundSize: "cover",
//     backgroundImage: `url(""https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/430b26cf-b6e1-473e-a55d-0abc03631481/IN-en-20230123-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
//     backgroundPosition: "Center Center"
// }}

  {/* <h2>{props.title}Hii</h2>

        <div className='row__posters'>
            {movies.map(movie =>(
                <img className='row__poster'
                 src={`${base_url}${movie.poster_path}`} 
                 alt={movie.name} />
            ))}
        </div> */}

       

             {/* <div className='row__fadebottom'></div> */}