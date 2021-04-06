import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import PirateForm from '../components/PirateForm'
import Header from './Header';


const AddPirate = (props) => {
    const {errors, setErrors, pirates, setPirates, socket} = props;
    const [pirate, setPirate] = useState({});
    const [loaded, setLoaded] = useState(false);
    const link = `http://localhost:8000/api/pirate/${props.id}`;
    const [headerButtonVisible] = useState(true);

    useEffect(() => {
        // axios.get(link)
        //     .then(res => {
        //         setPirate(res.data);
        //         setLoaded(true);
        //     })
    }, [])

    const createPirate = pirate => {
        console.log("Creating")
        axios.post('http://localhost:8000/api/pirate', pirate)
            .then( res => {
                pirates.push(res.data);
                setPirates(pirates);
                socket.emit("new_pirate", res);
                navigate("/pirates");
            })
            // catch our backend validations in case they didn't meet our criteria
            .catch(err=>{
                // console.log("error");
                // console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })      
    }

    const goToCrewBoard = () => {
        navigate('/pirates')
    }

    return (
        <div>
            <Header headerText={"Add Pirate"}
                headerButtonText={"Crew Board"} 
                headerButtonVisible={headerButtonVisible}
                onSubmit={goToCrewBoard}
            />
            { 
                <PirateForm
                    onSubmit={createPirate} 
                    errors={errors}
                    setErrors={setErrors}
                />
            }
        </div>
    )
}
export default AddPirate;
