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
        unique: true,
        match: /.+\@.+\..+/,
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

userSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

module.exports = mongoose.model('User', userSchema);