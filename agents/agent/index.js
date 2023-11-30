import express from "express"
import cron from "node-cron"
import axios from "axios"
import parser from "body-parser"
import cors from "cors"
import { Database } from "bun:sqlite"

const app = express()
const db = new Database("./db/dbstore", { create: true });

app.use(cors())
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());


app.listen(19103, () => {
    console.log('Agent running')
})