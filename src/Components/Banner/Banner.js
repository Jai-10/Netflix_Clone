import React, { useState, useEffect } from 'react'
import './Banner.css';
import axios from '../../axios';
import requests from '../../requests';

function Banner() {

     const [bannerMovie, setBannerMovie] = useState([]);

     useEffect(() => {
          async function fetchData() {
               const request = await axios.get(requests.fetchNetflixOriginals);
               // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
               setBannerMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
               return request;
          }
          fetchData();
     }, []);



     // stackoverflow
     function truncate(str, n) {
          return str?.length>n ? str.substr(0, n-1) + "..." : str;
     }



     return (
          <header className="banner"
               style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}")`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
               }}
          >

               <div className="banner_content">
                    <h1 id="movieTitle"> {bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name} </h1>
                    {/* <span> ({date}) </span> */}
                    <h5 id="movieDesc"> {truncate(bannerMovie?.overview, 150)} </h5>
                    <h5 className="movieRatings">{bannerMovie.vote_average}/10 by {bannerMovie.vote_count} viewers</h5>
               </div>

               <div className="blurEffect"></div>
          </header>
     )
}

export default Banner
