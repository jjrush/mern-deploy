import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { id, successCallback } = props;
    const deletePirate = e => {
        axios.delete('http://localhost:8000/api/pirate/' + id)
            .then(res => {
                successCallback();
            })
    }
    return (
        <button className="btn-delete" onClick={deletePirate}>
            Walk the Plank
        </button>
    )
}
export default DeleteButton;
