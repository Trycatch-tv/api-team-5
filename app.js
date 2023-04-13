const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

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
mongoose.connect('mongodb://127.0.0.1:27017/eventsdb', {useNewUrlParser: true, useUnifiedTopology: true});

//start server
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});