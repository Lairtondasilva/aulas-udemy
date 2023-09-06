import express, { urlencoded} from "express";
import routers from "./routes/index.js";
import path from 'node:path'

const app = express();

app.use(urlencoded({extended: true})); // configuração para ler o body de um post
app.use(express.static(path.resolve("public")))
app.set("views", path.resolve("src", 'views'))
app.set('view engine', 'ejs')

app.use(routers);

app.listen(3333, ()=>{
    console.log("running in port 3333")
});


