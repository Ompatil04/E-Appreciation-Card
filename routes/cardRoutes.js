const express = require("express");

const routes = express.Router();

const cardController = require("../controllers/cardController");

const isAuth = require("../middleware/isAuth");

const isValid = require("../middleware/isValid");

routes.get('/thank-you', isAuth, isValid, cardController.thankYou);

routes.get('/well-done', isAuth, isValid,cardController.wellDone);

routes.get('/excellence', isAuth, isValid,cardController.excellence);

routes.get('/team-work', isAuth,isValid, cardController.teamWork);

routes.get('/attitude', isAuth,isValid, cardController.attitude);

routes.get('/customer-service', isAuth, isValid,cardController.customerService);

routes.post('/send-mail', isAuth, isValid,cardController.sendMail);

module.exports = routes;
