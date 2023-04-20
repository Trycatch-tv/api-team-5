const Event = require("../models/event.model");

exports.index = async(req, res, next) => {

    let query = {};

    if(req.query.name) {
        query.name = new RegExp(req.query.name, 'i');
    }

    await Event.find(query)
        .then((documents) => {
            res.json({data: documents});
        }).catch(errors => {
            res.status(500).json({errors});
        });
        
}

exports.show = async(req, res, next) => {

    await Event.findById(req.params.id)
        .then((document) => {
            res.json({data: document});
        }).catch(errors => {
            res.status(500).json({errors});
        });

}

exports.create = async(req, res, next) => {

    let input = req.body;
    const { name, description, location, date } = req.body;

    await Event.create({ name, description, location, date})
        .then(document => {
            res.json({data: document});
        }).catch(errors => {
            res.status(500).json({errors});
        });

}

exports.update = async(req, res, next) => {

    let input = req.body;

    let event = {name: input.name, description: input.description, location: input.location, date: input.date};

    await Event.findByIdAndUpdate(req.params.id, event, {new: true})
        .then((document) => {
            res.json({data: document});
        })
        .catch((errors) => {
            res.status(500).json({errors});
        });

}

exports.delete = async(req, res, next) => {

    await Event.findByIdAndDelete(req.params.id)
        .then((document) => {
            res.json({data: document});
        })
        .catch((errors) => {
            res.status(500).json({errors});
        });

}