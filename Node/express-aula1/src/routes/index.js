import { Router } from "express";
import homeRouters from "./homeRouters.js";

const routers = Router();

routers.use("/home", homeRouters)

export default routers;