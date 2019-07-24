var mongoose = require('mongoose');
const uniqueValidator  = require('mongoose-unique-validator');

var PetSchema = new mongoose.Schema({
    name: {type: String, unique:true, dropDups:true,
        required: [true,"Name is required"], 
        minlength: [3, "Name must be 3 or more characters!"]
    },
    type: {type: String,
        required: [true,"Type is required"], 
        minlength: [3, "Type must be 3 or more characters!"]
    },
    description: {type: String,
        required: [true,"Type is required"], 
        minlength: [3, "Description must be 3 or more characters!"]
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number, default: 0},
},{timestamps: true, strict:false});

PetSchema.plugin(uniqueValidator , {message: 'All of our pets here have unique names! Please Try a new Name.'});
mongoose.model('Pet',PetSchema);