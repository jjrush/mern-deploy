import React, { useState } from 'react';
import '../css/pirateForm.css';

const PirateForm = (props) => {
    const { initTitle, initPrice, initDescription, errors, setErrors, onSubmit } = props;
    const [ title, setTitle ] = useState(initTitle); 
    const [ price, setPrice ] = useState(initPrice);
    const [ description, setDescription ] = useState(initDescription);

    const [ titleValidation, setTitleValidation ]= useState("");
    const [ priceValidation, setPriceValidation ]= useState("");
    const [ descValidation, setDescValidation ]= useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        setErrors([]);
        if ( title === "" ) {
            setTitleValidation("You must include a title");
        } 
        if ( price === "" ) {
            setPriceValidation("You must include a price");
        }
        if ( description === "" ) {
            setDescValidation("You must include a description");
        }
        else {
            setTitleValidation("")
            setPriceValidation("")
            setDescValidation("")
        }
        onSubmit({title,price,description});
    }


    //onChange to update fields
    return (
        <>
            <form className="pirateForm" onSubmit={onSubmitHandler}>
                <p>
                    <label>Title:</label>
                    <input className="titleField"
                        type="text" 
                        value={title} 
                        onChange = {(e)=>setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label>Price:</label>
                    <input className="priceField"
                        type="text"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label>Description:</label>
                    <input className="descField"
                        type="text"
                        value={description} 
                        onChange = {(e)=>setDescription(e.target.value)}
                    />
                </p>
                <input className="btn-submit" type="submit" value="Submit"/>
            </form>
            <div className="backend-validations">
                <ul>
                {/* frontend validations */}
                {
                    titleValidation && title === "" && !errors.title ?
                        <li className="validation-field">{titleValidation}</li>
                        : null
                }
                {
                    priceValidation !== "" && price === "" && !errors.price ? 
                        <li className="validation-field">{priceValidation}</li>
                        : null
                }
                {
                    descValidation && description === "" && !errors.description ?
                            <li className="validation-field">{descValidation}</li>
                            : null
                }
                {/* backend validations */}
                {
                    errors.title ?
                        <li className="validation-field">{errors.title.message}</li>
                        : null
                }
                {
                    errors.price ? 
                            <li className="validation-field">{errors.price.message}</li>
                            : null
                }
                {
                    errors.description ?
                            <li className="validation-field">{errors.description.message}</li>
                            : null
                }
                </ul>
            </div>
        </>  
    )
}
export default PirateForm;