require("dotenv").config();
const config = process.env;
const path = require('path')
const nodemailer = require("nodemailer");
// var fs = require('fs');

// require.extensions['.html'] = function (module, filename) {
//     module.exports = fs.readFileSync(filename, 'utf8');
// };

exports.thankYou = (req, res, next) => {


    let user = {
        name: req.user.userName,
        mail: req.user.userMail
    }
    res.render("cards", {
        pageTitle: "title",
        user,
        cardType: 'Thank you card',
        cards: ['https://images.unsplash.com/photo-1549032305-e816fabf0dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1602045486350-4e53a69865c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1586810165616-94c631fc2f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1620843437920-ead942b3abd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1549032305-e816fabf0dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
    });
};
exports.wellDone = (req, res, next) => {

    let user = {
        name: req.user.userName,
        mail: req.user.userMail
    }
    res.render("cards", {
        pageTitle: "title",
        user,
        cardType: 'wellDone',
        cards: ['https://images.unsplash.com/photo-1549032305-e816fabf0dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1602045486350-4e53a69865c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1586810165616-94c631fc2f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1620843437920-ead942b3abd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1549032305-e816fabf0dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
    });
};

exports.excellence = (req, res, next) => {

    let user = {
        name: req.user.userName,
        mail: req.user.userMail
    }
    res.render("cards", {
        pageTitle: "title",
        user,
        cardType: 'excellence',
        cards: ['s1.jpg', 's1.jpg', 's2.jpg', 's1.jpg', 's1.jpg', 's1.jpg']
    });
};
exports.attitude = (req, res, next) => {

    let user = {
        name: req.user.userName,
        mail: req.user.userMail
    }
    res.render("cards", {
        pageTitle: "title",
        user,
        cardType: 'attitude',
        cards: ['s2.jpg', 's2.jpg', 's1.jpg', 's2.jpg', 's2.jpg', 's2.jpg']
    });
};
exports.teamWork = (req, res, next) => {

    let user = {
        name: req.user.userName,
        mail: req.user.userMail
    }
    res.render("cards", {
        pageTitle: "title",
        user,
        cardType: 'teamWork',
        cards: ['wel.png', 'thank.jpg', 'wel.png', 'wel.png', 'wel.png', 'wel.png']
    });
};
exports.customerService = (req, res, next) => {

    let user = {
        name: req.user.userName,
        mail: req.user.userMail
    }
    res.render("cards", {
        pageTitle: "title",
        user,
        cardType: 'customerService',
        cards: ['thank.jpg', 's2.jpg', 'thank.jpg', 'thank.jpg', 'thank.jpg', 'thank.jpg']
    });
};

exports.sendMail = async (req, res, next) => {
    const sendTo = req.body.recieverMail;
    const sub = req.body.mailSubject;
    const from = req.user.userMail;
    const cardType = req.body.cardType;
    const cardImg = req.body.cardImg;
    const name = req.user.userName;
    const filePath = path.join(__dirname, "test1.ejs")
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${config.MAIL}`,
            pass: `${config.MAIL_PASS}`
        }
    });
    const ejs = require("ejs");
    const data = await ejs.renderFile(filePath, { cardType,cardImg,name });

    const mailOptions = {
        from,
        to: sendTo,
        subject: sub,
        cc: req.user.userMail,
        html: data
    };
    try {
        await transporter.sendMail(mailOptions)
        await req.user.addCard(sendTo, cardType)
        res.redirect('/');
    }
    catch (err) {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
    }


}
