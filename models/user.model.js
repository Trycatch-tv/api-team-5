const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    is_admin: {
        type: Boolean,
        default: false,
        required: [true, 'El tipo de usuario es requerido']
    },
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'El correo electrónico es requerido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    created_at: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('User', userSchema);