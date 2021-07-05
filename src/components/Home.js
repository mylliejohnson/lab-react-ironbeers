import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <Link to="/beers">
        <img src={require('../assets/beers.png')} />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          lacinia enim. In pellentesque ut diam nec facilisis. Pellentesque sed
          urna consequat, hendrerit ipsum.
        </p>
      </Link>

      <Link to="/random-beer">
        <img src={require('../assets/random-beer.png')} />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          lacinia enim. In pellentesque ut diam nec facilisis. Pellentesque sed
          urna consequat, hendrerit ipsum.
        </p>
      </Link>

      <Link to="/new-beer">
        <img src={require('../assets/new-beer.png')} />
        <h2> New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          lacinia enim. In pellentesque ut diam nec facilisis. Pellentesque sed
          urna consequat, hendrerit ipsum.
        </p>
      </Link>
    </div>
  );
}

export default Home;
