// imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

// css
import '../css/main.css'

// components
import PirateForm from '../components/PirateForm';
import ListAll from '../components/ListAll';

const Main = (props) => {
    const {errors,setErrors} = props;
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [socket] = useState(() => io(':8000'));

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
            .then(res=>{
                setPirates(res.data);
                setLoaded(true);
            });

        // make sure to disconnect when the component is unloaded
        return () => socket.disconnect(true);
    }, [])

    const createPirate = pirate => {
        axios.post('http://localhost:8000/api/pirate', pirate)
            .then( res => {
                pirates.push(res.data);
                setPirates(pirates);
                socket.emit("new_pirate", res);
            })
            // catch our backend validations in case they didn't meet our criteria
            .catch(err=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })      
    }

    return (
        <div className="App">
            <h1>Pirate Crew</h1>
            <PirateForm className="pirateForm" 
                onSubmit={createPirate} 
                errors={errors}
                setErrors={setErrors}
                initTitle="" 
                initPrice=""
                initDescription=""
            />
            <hr/>
            { loaded && 
                <ListAll 
                    socket={socket}
                    pirates={pirates} 
                    setPirates={setPirates}
                    removeFromDom={removeFromDom}
                />
            }
        </div>
    )
}
export default Main;
