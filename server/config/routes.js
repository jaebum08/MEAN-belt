var petsController = require('./../controllers/pets');
var path = require('path');


module.exports = (app) => {
    app.get('/api/pets',petsController.allPets);
    app.get('/api/pet/:id',petsController.getPet);
    app.post('/api/pets',petsController.addPet);
    app.put('/api/pets/:id',petsController.updatePet);
    app.delete('/api/pets/:id',petsController.deletePet);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('public/dist/public/index.html'));
    })
}