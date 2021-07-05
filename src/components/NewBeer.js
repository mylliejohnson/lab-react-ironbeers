import React, { useState } from 'react';
import axios from 'axios';

function NewBeer(props) {
  let [newBeer, setNewBeer] = useState({});

  const handleChange = (e) => {
    let copyBeer = { ...newBeer };
    copyBeer[e.target.name] = e.target.value;
    setNewBeer(copyBeer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newBeer.attuation_level = Number(newBeer.attenuation_level);
    axios.post(`https://ih-beers-api2.herokuapp.com/beers`);
  };

  return (
    <div>
      
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="beer"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="tagline"
          name="tagline"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="attenuation_level"
          name="attenuation_level"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
