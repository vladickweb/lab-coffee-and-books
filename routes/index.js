
module.exports = app => {

    // Base URL's
    app.use("/", require("./base.routes"))
    app.use('/places', require('./places.routes'))
    app.use('/api', require('./api.routes'))
}