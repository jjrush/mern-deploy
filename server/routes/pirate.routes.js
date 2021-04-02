const Controller = require(`../controllers/pirate.controller`);
module.exports = function(app){
    const path = "pirate";
    app.get(`/api/${path}`, Controller.getAllPirates);
    app.get(`/api/${path}/:id`, Controller.getDetails);
    app.post(`/api/${path}`, Controller.createPirate);     
    // app.put(`/api/${path}/:id`, Controller.updatePirate);
    app.delete(`/api/${path}/:id`, Controller.deletePirate);
}
