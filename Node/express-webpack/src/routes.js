import { Router } from "express";
import homeRouters from './routes/homeRouters.js'

const routers = Router();

routers.use(homeRouters);

export default routers;