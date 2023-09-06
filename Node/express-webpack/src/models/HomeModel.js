import mongoose, { Schema } from "mongoose";

const HomeScheema = new Schema({
    title: {type: String, required: true},
    description: String
})

const HomeModel = mongoose.model('Home', HomeScheema);

export default HomeModel;