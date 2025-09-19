import React, { use, useState } from 'react';
import Country from '../Country/country';
import './countries.css';

const Countries = ({countriesPromise}) => {
  const [visitedCountries,setVisitedCountries]=useState([]);
  const handleVisitedCountries=(country)=>{
    console.log('handle visited country clicked',country)
  }
  const countriesData=use(countriesPromise);
const countries=countriesData.countries
   
  return (
    <div >
      <h1>In the countries : {countries.length}</h1>
      <h4>Total visited countries : {visitedCountries.length}</h4>
<div className='countries'>
        {
        countries.map(country => <Country 
          key={country.cca3.cca3}
          country={country}
          handleVisitedCountries={handleVisitedCountries}></Country>)
      }
</div>
    </div>
  );
};

export default Countries;