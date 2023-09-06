import { Router } from "express";
import getHome from "../controllers/homeController.js";

const homeRouters = Router();

homeRouters.get("/", getHome);

export default homeRouters;