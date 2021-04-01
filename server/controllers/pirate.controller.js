const Pirate = require('../models/pirate.model');   


module.exports.createPirate = (request, response) => {
    const { title, price, description } = request.body;

    Pirate.create({
        title,
        price,
        description
    })
        .then(res => response.json(res))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
        .then(res => response.json(res))
        .catch(err => response.json(err))
}

module.exports.getDetails = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(res => response.json(res))
        .catch(err => response.json(err))
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(res => response.json(res))
        .catch(err => response.json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}