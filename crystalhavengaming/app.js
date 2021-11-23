// Requirements
/*---------------------------------------------------------------------*/
require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("./util/logger.js");
const path = require("path");
const engine = require("ejs-mate");
const methodOverride = require("method-override");
const db = require("./util/database");
const Duty = require("./models/duties");
const Event = require("./models/events");
const session = require("express-session");
const mySQLStore = require("express-mysql-session")(session);
const morgan = require("morgan");
const flash = require("connect-flash");
const CustomError = require("./util/CustomError");
const eventRoutes = require("./routes/events");
const dutyRoutes = require("./routes/duties");
const csurf = require("csurf");
const csurfProtection = csurf();
/*---------------------------------------------------------------------*/

// Sessions
const sessionStore = new mySQLStore({
  clearExpired: true,
  checkExpirationInterval: 86400000,
  expiration: 86400000,
  createDatabaseTable: true,
}, db);

// Settings
/*---------------------------------------------------------------------*/
app.engine("ejs", engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/*---------------------------------------------------------------------*/

// Middleware
/*---------------------------------------------------------------------*/
app.use(morgan("tiny"));
app.use(flash());
app.use(session({
  secret: process.env.SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: { sameSite: "strict" },
  name: "CHG_session"
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(csurfProtection);

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.warning = req.flash("warning");
  res.locals.error = req.flash("error");
  res.locals.currentUser = { username: "Josie", discordName: "Last Hero" }
  res.locals.token = req.csrfToken();
  next();
});
/*---------------------------------------------------------------------*/

// Send to router
/*---------------------------------------------------------------------*/
app.use("/events", eventRoutes);
app.use("/duties", dutyRoutes);
/*---------------------------------------------------------------------*/

// Basic Routes
/*---------------------------------------------------------------------*/
app.get("/", (req, res) => {
  res.render("home", { title: "Crystal Haven Gaming" });
});

app.get("/handbook", (req, res, next) => {
  res.render("handbook");

})

// Catch all route (message, status, module, page, other)
app.all("*", (req, res, next) => {
  next(new CustomError("That page does not exist.", 404, 'app.all caught me', 'no page', req.originalUrl));
});

// General use error route
app.use((err, req, res, next) => {
  console.log("Hitting the error middleware")
  console.log(err)

  // Database connection errors result in this ETIMEDOUT
  if (err.code === 'ETIMEDOUT') {
    logger.info("Probably cannot connect to the database. Whole site is down. ");
    logger.error(err);
    return res.send("There is a serious problem with the site. The developer has been notified. Please try again later.")
  }






  if (!err.message) {
    err.message = "Unknown error occured";
  }

  if (err.message.includes("CONSTRAINT")) {
    err.message = "Database constraint violated";
  }

  if (err.code === 'EBADCSRFTOKEN') {
    req.flash("error", "Your CSRF token was rejected. Please use the system as intended.")
    return res.redirect("/")
  }

  if (err.module === 'joi') {
    req.flash('error', err.message);
    console.log(err.page)
    return res.redirect(`/tools/${err.page}`);
  }


  logger.info("Something happened that wasn't anticipated");
  logger.error(err);
  res.render("error", { error: "Something happened that wasn't anticipated. The developer has been notified. Please try again later." });

});








app.listen(process.env.PORT);
console.log(`listening on port ${process.env.PORT}`);






