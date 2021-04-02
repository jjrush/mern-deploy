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

        socket.on("inform_other_ships", pirate => {
            setPirates(prevData => {return [pirate, ...prevData]})
        })
    }, [pirates])

    return (
        <div className="listAll">
            {
                pirates.map( (pirate, index) => {
                    return ( 
                        <div className="singlePirate" key={index}>
                            <div className="img-div">
                                <img src={pirate.image}></img>
                            </div>
                            <div className="content-div">
                                <p className="pirate-title">{pirate.name}</p>
                                <div className="buttons">
                                    <Link to={"/pirate/" + pirate._id}>
                                        <button className="btn-edit">View Pirate</button>
                                    </Link>
                                    <DeleteButton 
                                        id={pirate._id} 
                                        successCallback={()=>removeFromDom(pirate._id)}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}
export default ListAll;
