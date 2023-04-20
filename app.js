const bodyParser = require('body-parser');
const config = require('./config.js');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

//config cors
app.use(cors({origin: '*', optionsSuccessStatus: 200}));

//config body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routers
const eventRouter = require('./routes/event.routes');
const userRouter = require('./routes/user.routes');
const inscriptionRouter = require('./routes/inscription.route');

//routes
app.get('/', (req, res) => {
    res.send({message: 'success'}).status(200);
});
app.use('/events', eventRouter);
app.use('/users', userRouter);
app.use('/inscriptions', inscriptionRouter);

//mongoDB
mongoose.connect(config.MONGO_INFO, {useNewUrlParser: true, useUnifiedTopology: true});

//start server
app.listen(config.PORT, () => {
    console.log(`Server on port ${config.PORT}`);
});