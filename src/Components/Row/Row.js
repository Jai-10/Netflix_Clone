import React, { useState, useEffect } from 'react'
import './Row.css';
import axios from '../../axios';

function Row( props ) {

     const [movies, setMovies] = useState([]);

     // a snippet of code which runs on a specific condition/variable
     useEffect(() => {
          // if [], then run once when the row loads, and dont run it again.
          async function fetchData() {
               const request = await axios.get(props.fetchUrl);       // axios appends the path to the base url and makes the request
               setMovies(request.data.results);
               return request;
          };
          fetchData();
     }, [props.fetchUrl]);
     // IMPORTANT:  we 'HAVE TO' include the variable that we're using from outside the useEffect hook as it is dependent on it.
     // every time our URL {props.fetchUrl} changes, we must run the function in the useEffect hook.
     // (similar to componentDidMount in class based components)


     const baseUrlForImage = "https://image.tmdb.org/t/p/original/";

     return (
     <div className="row">
          <p className="title"> {props.title} </p>
          
          <div className="posters">
               {movies.map(element => (
                    <div className="element">
                         <img
                              src={`${baseUrlForImage}${props.isFirstRow ? element.poster_path : element.backdrop_path}`} alt={`${element.name}`}
                              className={`posterImg  ${props.isFirstRow ? 'isFirstRow' : 'isSmallRow'}`}
                              key={element.id} // for uniqueness, so that only this specific component re-renders
                         />
                         <p className="elementName"> {element?.title || element?.name || element?.original_name} </p>
                         <p className="elementRatings">{element.vote_average}/10 by {element.vote_count} viewers</p>
                    </div>
               ))}
          </div>

     </div>
     )
}

export default Row
