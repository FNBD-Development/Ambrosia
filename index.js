const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

app.use(require('cors')())
app.set("view engine", require('ejs'))
app.use(cookieParser());
app.use(session({
  secret: process.env.session_sercret,
  resave: true,
  saveUninitialized: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Nothing Much Below
const PORT = process.env.PORT || 3341
app.listen(PORT, () => {
  console.log(chalk.blue("[EXPRESS]") + chalk.green("Running on port:", PORT))
})