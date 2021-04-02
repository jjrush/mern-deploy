// imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import '../css/main.css'
import ListAll from '../components/ListAll';
import { navigate } from '@reach/router';

const Main = (props) => {
    const {errors,setErrors,pirates,setPirates,socket} = props;
    const [loaded, setLoaded] = useState(false);
    const [headerButtonVisible] = useState(true);

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

    const addPirate = () => {
        navigate("/pirate/new")
    }

    return (
        <div className="App">
            <Header path="/" headerText={"Pirate Crew"}
                headerButtonText={"Add Pirate"} 
                headerButtonVisible={headerButtonVisible}
                onSubmit={addPirate}
            />
            {/* <PirateForm className="pirateForm" 
                onSubmit={createPirate} 
                errors={errors}
                setErrors={setErrors}
                initTitle="" 
                initPrice=""
                initDescription=""
            /> */}
            { loaded && 
                <ListAll
                    className="pirate-list"
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
