const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./router/indexRouter");
const newMessageRouter = require("./router/newMessageRouter");

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
