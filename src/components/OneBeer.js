import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function OneBeer(props) {
  let [beer, setBeer] = useState([]);

  console.log(beer);
  useEffect(async () => {
    let res = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`
    );
    setBeer(res.data);
  }, []);

  return (
    <div>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <h2>{beer.attenuation_level}</h2>
      <img src={beer.image_url} style={{ width: '30%' }} />
      <h4>{beer.first_brewed}</h4>
      <p>{beer.description}</p>
      <h4>Contributed by: {beer.contributed_by}</h4>
    </div>
  );
}

export default OneBeer;
