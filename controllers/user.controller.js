const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.index = async(req, res, next) => {
    await User.find({is_admin: false})
        .then((documents) => {
            res.json({data: documents});
        })
        .catch((errors) => {
            res.status(500).json(errors);
        });
}

exports.create = async(req, res, next) => {

    const {name, email, password} = req.body;

    await User.create({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 10)
    }).then((document) => {
        res.json({message: '¡Usuario registrado!', email: document.email});
    }).catch((errors) => {
        res.status(400).json(errors);
    });

}

exports.update = async(req, res, next) => {

    let user = {};
    user.name = req.body.name;

    if(req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 10);
    }

    await User.findByIdAndUpdate(req.params.id, user, {new: true})
        .then((document) => {
            res.json({message: '¡Usuario actualizado!', name: document.name});
        })
        .catch((errors) => {
            res.status(400).json(errors);
        });

}

exports.delete = async(req, res, next) => {

    await User.findByIdAndDelete(req.params.id)
        .then((document) => {
            res.json({data: document});
        })
        .catch((errors) => {
            res.status(400).json({errors});
        });
        
}

exports.auth = async(req, res, next) => {

    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (user) {

        if(bcrypt.compareSync(password, user.password)) {

            let token = jwt.sign({
                id: user._id,
                is_admin: user.is_admin,
                name: user.name
            }, 'signal');

            res.json({message: '¡Usuario autenticado!', token});

        } else {

            res.status(403).json({message: '¡Datos incorrectos!'});

        }

    } else {

        res.status(404).json({message: '¡No hemos encontrado una cuenta con tú correo!'});
        
    } 
}