const Event = require("../models/event.model");

exports.index = async(req, res, next) => {

    await Event.find({})
        .then((documents) => {
            return res.status(200).json({data: documents});
        }).catch(errors => {
            res.json({errors});
        });
        
}

exports.create = async (req, res, next) => {

    let input = req.body;

    await Event.create({ 
            name: input.name, 
            description: input.description, 
            location: input.location, 
            date: input.date
        }).then(document => {
            res.status(200).json({data: document});
        }).catch(errors => {
            res.json({errors});
        });

}