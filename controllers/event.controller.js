const Event = require("../models/event.model");

exports.index = async(req, res, next) => {

    await Event.find({})
        .then((documents) => {
            return res.json({data: documents});
        }).catch(errors => {
            return res.json({errors});
        });
        
}

exports.show = async(req, res, next) => {

    await Event.findById(req.params.id)
        .then((document) => {
            return res.json({data: document});
        }).catch(errors => {
            return res.json({errors});
        });

}

exports.create = async(req, res, next) => {

    let input = req.body;

    await Event.create({ 
            name: input.name, 
            description: input.description, 
            location: input.location, 
            date: input.date
        }).then(document => {
            return res.json({data: document});
        }).catch(errors => {
            return res.json({errors});
        });

}

exports.update = async(req, res, next) => {

    let input = req.body;

    let event = {name: input.name, description: input.description, location: input.location, date: input.date};

    await Event.findByIdAndUpdate(req.params.id, event, {new: true})
        .then((document) => {
            return res.json({data: document});
        })
        .catch((errors) => {
            return res.json({errors});
        });

}

exports.delete = async(req, res, next) => {
    
}