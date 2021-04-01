import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

import '../css/listAll.css';

const ListAll = (props) => {
    const {socket} = props;
    const [ pirates, setPirates ] = useState([]);

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate')
            .then(res => setPirates(res.data));

        socket.on("update_other_clients", pirate => {
            setPirates(prevData => {return [pirate, ...prevData]})
        })
    }, [pirates])

    return (
        <div className="listAll">
            <h2>All Pirates:</h2>
            {
                pirates.map( (pirate, index) => {
                    return ( 
                        <div className="singlePirate" key={index}>
                            <span></span>
                            <p className="pirate-title">{pirate.title}</p>
                            <p className="pirate-price">${pirate.price}</p>
                            
                            <p className="pirate-desc">{pirate.description}</p>
                            <Link to={"/pirate/" + pirate._id}>
                                <button className="btn-edit">Edit</button>
                            </Link>
                            <DeleteButton 
                                id={pirate._id} 
                                successCallback={()=>removeFromDom(pirate._id)}
                            />
                        </div>
                    )
                })
            }
        </div>

    )
}
export default ListAll;
