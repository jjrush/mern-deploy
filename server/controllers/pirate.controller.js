const Pirate = require('../models/pirate.model');   


module.exports.createPirate = (request, response) => {
    const { name,image,booty,quote,position,pegLeg,eyePatch,hookHand } = request.body;

    Pirate.create({
        name,image,booty,quote,position,pegLeg,eyePatch,hookHand
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

// turn on validtions for edit
// const opts = {runValidators:true, new:true};
// module.exports.updatePirate = (request, response) => {
//     Pirate.findOneAndUpdate({_id: request.params.id}, request.body, opts)
//         .then(res => response.json(res))
//         .catch(err => response.status(400).json(err))
// }

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}