const mongoose= require('mongoose');


const BraidsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    },  
    price:  {
        type: String,
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

module.exports = mongoose.model('braids', BraidsSchema)