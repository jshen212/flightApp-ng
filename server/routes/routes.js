module.exports = function(app, express) {
  var flightRouter = express.Router();

  app.use('/api/flights', flightRouter)

  require('./flightRoute.js')(flightRouter);
}
