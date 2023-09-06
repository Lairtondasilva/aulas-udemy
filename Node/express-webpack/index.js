import express from "express";
import routers from './src/routes.js';
import mongoose from "mongoose";
import {config} from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3333;
const app = express();
const {CONNECT_STRING} = process.env;

config();

mongoose.connect(process.env.CONNECT_STRING).then(()=>{
    app.emit("Ready");    
}).catch((error)=>{
    console.log(error)
})

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, "public")));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routers)

app.on('Ready', ()=>{
    app.listen(PORT, ()=>{
    console.log(`Running at port ${PORT}`);
    })
})
