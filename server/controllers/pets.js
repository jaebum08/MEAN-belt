var mongoose = require('mongoose');
var Pet = new mongoose.model('Pet');

module.exports = {
    // fetch from mongo
    allPets: (req,res) => {
        Pet.find({},null, {sort: {type:-1}},(err,data)=> {
            if (err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    getPet: (req,res) => {
        Pet.findOne({_id: req.params.id}, (err,data)=> {
            if (err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    addPet: (req,res) =>{
        Pet.create(req.body, (err,data) => {
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    updatePet: (req,res) =>{
        Pet.updateOne({_id:req.params.id}, req.body, (err,data) =>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    deletePet: (req,res) =>{
        Pet.deleteOne({_id: req.params.id}, (err,data)=> {
            if (err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    }
}