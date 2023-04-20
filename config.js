module.exports = {
    PORT: process.env.PORT || 3000,
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'signal',
    MONGO_INFO: process.env.MONGO_INFO || 'mongodb://127.0.0.1:27017/eventsdb'
};