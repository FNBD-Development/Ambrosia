import express from 'express';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk'
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo'

const app = express();
const port = 3333;

app.use(session({
  secret: "SexyBanana",
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: "mongodb://node1:23093/Ambrosia" })
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import api from "./router/api.ts"
app.use('/api', api);

require('./mongoose/init.ts')

app.listen(port, () => {
  console.log(`${chalk.blue('[APIServer]')}`+`${chalk.green(` API is running at http://localhost:${port}`)}`);
});