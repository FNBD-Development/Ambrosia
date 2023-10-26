const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
import chalk from 'chalk';
const path = require('path')
const fs = require('fs')
const MongoStore = require('connect-mongo');
const fileUpload = require('express-fileupload')
const app = express()

app.use(require('cors')())
app.set("view engine", require('ejs'))
app.use(cookieParser());
app.use(session({
  secret: process.env.session_sercret,
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.mongoose })
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './temp'
}));
app.use("/api", require('./routers/api'))
app.use("", require('./routers/index')) // For / Route :Wink:
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
// That would't work
// app.use('/api/user', express.static(path.join(__dirname, 'avatars')))
// 



// Handlers
//require('./cronjobs/listener')
require('./mongoose/init')
require('./utilities/updater.js')
if (fs.existsSync('updating.env')) {
  fs.rename('updating.env', '.env', () => { 
    console.log("\n Update Finished! If Settings are broken contact support! \n"); 
  }); 
}

app.use((req, res, next) => {
  res.status(404).render(__dirname+'/views/errors/duckrender404.ejs', {

  })
})


// Nothing Much Below
const PORT = process.env.PORT || 3341
app.listen(PORT, () => {
  console.log(chalk.blue("[EXPRESS]") + chalk.green(" Running on port:", PORT))
})