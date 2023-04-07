const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let eventSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El título es requerido']
    },
    description: {
        type: String,
        required: [true, 'La descripción del evento es requerida']
    },
    location: {
        type: String,
        required: [true, 'El lugar del evento es requerido']
    },
    date: {
        type: Date,
        default: Date.now,
        required: [true, 'La fecha del evento es requerida']
    },
    created_at: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Event', eventSchema);