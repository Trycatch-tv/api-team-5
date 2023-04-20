const Inscription = require("../models/inscription.model");

exports.create = async(req, res, next) => {

    const { event_id, user_id } = req.params;

    await Inscription.create({event_id, user_id, status: true})
        .then((document) => {
            res.json({data: document});
        })
        .catch(errors => {
            res.status(500).json({errors});
        });

}

exports.delete = async(req, res, next) => {
    
    const { event_id, user_id } = req.params;

    await Inscription.deleteOne({event_id, user_id})
        .then((document) => {
            res.json({deletedInscriptions: document.deletedCount});
        })
        .catch((errors) => {
            res.status(500).json({errors});
        });

}