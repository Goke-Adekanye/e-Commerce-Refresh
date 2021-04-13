const mongoose= require('mongoose');


const LocsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },  
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date:  {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Locs', LocsSchema)