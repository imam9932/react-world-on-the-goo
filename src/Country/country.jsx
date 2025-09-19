import React, { useState } from 'react';
import './country.css'



const Country = ({country,handleVisitedCountries}) => {
  //  .log(cconsoleountry.area.area)
  // console.log(handleVisitedCountries)
  const [visited,setVisited]=useState(false);

   const handleVisited=()=>{
setVisited(!visited);
handleVisitedCountries()
   }
  return (
    <div className={`country ${visited?'country-visited':'country-not-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name : {country.name.common} </h2>
      <h4>Area : {country.area.area} {country.area.area > 300000? 'Big Country' : "Small country"}</h4>
      <button onClick={handleVisited}>{visited ? 'visited' : "Not Visited"} </button>

    </div>
  );
};

export default Country;