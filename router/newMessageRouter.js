const { Router } = require("express");
const messages = require('./messages');

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) =>
  res.render("form", { title: "New Message" })
);

newMessageRouter.post("/", (req, res) => {
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = newMessageRouter;
