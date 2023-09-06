import logger from "../../logger.js";
import HomeModel from "../models/HomeModel.js";

import pkg from 'jaeger-client';
const { initTracer } = pkg;

const config = {
  serviceName: 'express-webpack',
  sampler: {
    type: 'const',
    param: 1,
  },
  reporter: {
    agentHost: 'localhost',
    agentPort: 6832,
  },
};

const options = {};

const tracer = initTracer(config, options);

const getHome = (req, res)=>{
    logger.info('Requisição recebida!');
    res.render("index")
};

export default getHome;