const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let inscriptionSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Inscription', inscriptionSchema);