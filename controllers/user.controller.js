const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = async(req, res, next) => {

    let input = req.body;

    await User.create({
        name: input.name,
        email: input.email,
        password: bcrypt.hashSync(input.password, 10)
    }).then((document) => {
        res.json({message: '¡Usuario registrado!', email: input.email});
    }).catch((errors) => {
        res.status(400).json(errors);
    });

}

exports.auth = async(req, res, next) => {

    let input = req.body;

    const user = await User.findOne({email: input.email});

    if (user) {

        if(bcrypt.compareSync(input.password, user.password)) {

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