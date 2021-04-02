const mongoose = require('mongoose');

function validateName(value) {
    return true;
}

function validateImage(value) {
    if ( value.length > 3 ) {
        return true
    } else {
        return false
    }
}

function validateQuote(value) {
    if ( value.length > 3 ) {
        return true
    } else {
        return false
    }
}
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Title is required"
        ],
        validate: {
            validator: validateName,
            message: "Title must be more than 3 characters"
        }
    },

    image: {
        type: String,
        required: [
            true,
            "Image is required"
        ],
        validate: {
            validator: validateImage,
            message: "Image must be a valid URL"
        }
    },

    booty: {
        type: Number,
        required: true
    },


    quote: {
        type: String,
        required: [
            true,
            "A catch phrase is required"
        ],
        validate: {
            validator: validateQuote,
            message: "Catch phrase must be longer than 3 characters"
        }
    },

    position: {
        type: String,
        required: true
    },

    pegLeg: {
        type: String,
        required: true
    },

    eyePatch: {
        type: String,
        required: true
    },

    hookHand: {
        type: String,
        required: true
    },
}, { timestamps: true });
module.exports = mongoose.model('Pirate', PirateSchema);