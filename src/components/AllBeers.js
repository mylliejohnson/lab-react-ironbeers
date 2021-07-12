import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function AllBeers(props) {
    let [allBeers, setAllBeers] = useState([])

    useEffect (async function () {
        let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        setAllBeers(res.data)
        console.log(res.data)
    }, [])

    const displayAll = () => {
        return allBeers.map((beer) =>{
           return (
            <Link to={`/one-beer/${beer._id}`}>
                <div className="beer">
                <img src={beer.image_url} style={{width:'10%', marginRight:50 }}/>
                <div>
                    <h2 style={{color:'grey'}}>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.contributed_by}</p>
                </div>
            </div>
            </Link>
           )
        }
        )
    }


    return (
        <div>
           {displayAll()}
        </div>
    );
}

export default AllBeers;