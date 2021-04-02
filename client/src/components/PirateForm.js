import React, { useState } from 'react';
import '../css/pirateForm.css';

const PirateForm = (props) => {
    const { errors, setErrors, onSubmit } = props;
    const [ name, setName ] = useState(""); 
    const [ image, setImage ] = useState("");
    const [ booty, setBooty ] = useState(0);
    const [ quote, setQuote ] = useState("");
    const [ pegLeg, setPegLeg ] = useState(false);
    const [ eyePatch, setEyePatch ] = useState(false);
    const [ hookHand, setHookHand ] = useState(false);
    const [ position, setPosition ] = useState("Powder Monkey");
    const [ nameValidation, setNameValidation ] = useState("");
    const [ imageValidation, setImageValidation ] = useState("");
    const [ bootyValidation, setBootyValidation ] = useState("");
    const [ quoteValidation, setQuoteValidation ] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        setErrors([]);

        setNameValidation("");
        setBootyValidation("");
        setImageValidation("");
        setQuoteValidation("");
        
        if ( name === "" ) {
            setNameValidation("You must include a name");
        } 
        if ( image === "" ) {
            setImageValidation("You must include an image");
        } 
        
        let b = parseInt(booty)
        if ( b < 0 ) {
            setBootyValidation("Treasure can not be negative");
        } 
        if ( quote === "" ) {
            setQuoteValidation("You must include a quote");
        } 

        if ( nameValidation == "" && bootyValidation == "" && imageValidation == ""  && quoteValidation == "" )
        {
            setNameValidation("");
            setImageValidation("");
            setBootyValidation("");
            setQuoteValidation("");
            onSubmit({name,image,booty,quote,pegLeg,eyePatch,hookHand,position});
        }
    }

    return (
        <>
            <form className="pirate-form" onSubmit={onSubmitHandler}>
                <div className="form-left-column">
                    <label className="label">Pirate Name:</label>
                    <input
                        type="text" 
                        value={name}
                        onChange = {(e)=>setName(e.target.value)}
                    />
                    <label className="label">Image URL:</label>
                    <input className="img-field"
                        type="text" 
                        value={image}
                        onChange = {(e)=>setImage(e.target.value)}
                    />
                    <label className="label"># of Treasure Chests:</label>
                    <input
                        type="number" 
                        value={booty}
                        onChange = {(e)=>setBooty(e.target.value)}
                    />
                    <label className="label">Pirate Catch Phrase:</label>
                    <input
                        type="text" 
                        value={quote}
                        onChange = {(e)=>setQuote(e.target.value)}
                    />
                    <div className="validations">
                        <ul>
                        {/* frontend validations */}
                        {
                            nameValidation !== "" && name === "" && !errors.name ?
                                <li className="validation-field">{nameValidation}</li>
                                : null
                        }
                        {
                            imageValidation !== "" && image === "" && !errors.image ?
                                <li className="validation-field">{imageValidation}</li>
                                : null
                        }
                        {
                            bootyValidation !== "" && parseInt(booty) < 0 && !errors.booty ?
                                <li className="validation-field">{bootyValidation}</li>
                                : null
                        }
                        {
                            quoteValidation !== "" && quote === "" && !errors.quote ?
                                <li className="validation-field">{quoteValidation}</li>
                                : null
                        }
                        {/* backend validations */}
                        {
                            errors.name ?
                                <li className="validation-field">{errors.name.message}</li>
                                : null
                        }
                        {
                            errors.image ?
                                <li className="validation-field">{errors.image.message}</li>
                                : null
                        }
                        {
                            errors.booty ?
                                <li className="validation-field">{errors.booty.message}</li>
                                : null
                        }
                        {
                            errors.quote ?
                                <li className="validation-field">{errors.quote.message}</li>
                                : null
                        }
                        </ul>
                    </div>
                </div>
                <div className="form-right-column">
                <label className="label">Crew Position:</label>
                    <select className="crew-select" onChange={(e)=>setPosition(e.target.value)}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey" selected>Powder Monkey</option>
                    </select>
                    
                    <input
                        type="checkbox" 
                        onChange = {(e)=>setPegLeg(e.target.value)}
                    />
                    <label>Peg Leg</label>
                    <br></br>
                    <input
                        type="checkbox" 
                        onChange = {(e)=>setEyePatch(e.target.value)}
                    />
                    <label>Eye Patch</label>
                    <br></br>
                    <input
                        type="checkbox" 
                        onChange = {(e)=>setHookHand(e.target.value)}
                    />
                    <label>Hook Hand</label>
                    <input className="btn-submit" type="submit" value="Add Pirate"/>
                </div>
            </form>
        </>  
    )
}
export default PirateForm;