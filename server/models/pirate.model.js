const mongoose = require('mongoose');

function validateTitle(value) {
    if ( value.length > 3 ) {
        return true
    } else {
        return false
    }
}

function validatePrice(value) {
    if ( value.length > 0 ) {
        return true
    } else {
        return false
    }
}

function validateDescription(value) {
    if ( value.length >= 5 ) {
        return true
    } else {
        return false
    }
}

const PirateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ],
        validate: {
            validator: validateTitle,
            message: "Title must be more than 3 characters"
        }
    },

    price: {
        type: String,
        required: [
            true,
            "Price is required"
        ],
        validate: {
            validator: validatePrice,
            message: "Price cannot be negative"
        }
    },

    description: {
        type: String,
        required: [
            true,
            "Description is required"
        ],
        validate: {
            validator: validateDescription,
            message: "Description must be at least 5 characters"
        }
    }
}, { timestamps: true });
module.exports = mongoose.model('Pirate', PirateSchema);