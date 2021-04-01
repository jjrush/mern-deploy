import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import PirateForm from '../components/PirateForm'

const Details = (props) => {
    const {errors, setErrors} = props;
    const [pirate, setPirate] = useState({});
    const [loaded, setLoaded] = useState(false);
    const link = `http://localhost:8000/api/pirate/${props.id}`;

    useEffect(() => {
        axios.get(link)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
            })
    }, [])

    const updatePirate = (e) => {
        pirate.title = e.title;
        pirate.price = e.price;
        pirate.description = e.description;
        axios.put(link, pirate)
            .then(navigate("/"));
    }

    return (
        <div>
            <h1>Update a Pirate</h1>
            { loaded && (
                <>
                    <PirateForm
                        onSubmit={updatePirate} 
                        errors={errors}
                        setErrors={setErrors}
                        initTitle={pirate.title} 
                        initPrice={pirate.price} 
                        initDescription={pirate.description}
                    />
                    <DeleteButton id={props.id} successCallback={() => navigate("/")}/>
                </>
            )}
        </div>
    )
}
export default Details;
