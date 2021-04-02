import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import Header from './Header';

import '../css/pirateDetail.css'

const PirateDetail = (props) => {
    const [pirate, setPirate] = useState({});
    const link = `http://localhost:8000/api/pirate/${props.id}`;
    const [headerButtonVisible] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(link)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
            })
    }, [])

    const goToCrewBoard = () => {
        navigate('/pirates')
    }

    return (
        <>
            <Header headerText={pirate.name}
                headerButtonText={"Crew Board"} 
                headerButtonVisible={headerButtonVisible}
                onSubmit={goToCrewBoard}
            />
            <div className="pirate-detail">
                <div className="display-left-column">
                    <div className="display-img">
                        <img src={pirate.image}></img>
                    </div>
                    <div className="display-quote">
                        <h1>"{pirate.quote}"</h1>
                    </div>
                </div>
                <div className="display-right-column">
                    <div className="display-about">
                        {/* <h2 className="display-about-text">
                            About
                        </h2> */}
                        <table>
                            <thead >
                                <th className="space"></th>
                                <th className="about">About</th>
                            </thead>
                            <tbody>

                                <span></span>
                                <tr>
                                    <td>Position:</td>
                                    <td>{pirate.position}</td>
                                </tr>
                                <tr>
                                    <td>Treasures:</td>
                                    <td>{pirate.booty}</td>
                                </tr>
                                <tr>
                                    <td>Peg Leg:</td>
                                    <td>
                                        {pirate.pegLeg === "on" ? 
                                            "yes" : "no"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eye Patch:</td>
                                    <td>
                                        {pirate.eyePatch === "on" ? 
                                            "yes" : "no"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hook Hand:</td>
                                    <td>
                                        {pirate.hookHand === "on" ? 
                                            "yes" : "no"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PirateDetail;
