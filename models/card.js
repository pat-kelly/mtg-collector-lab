import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: String,
  castCost: String
})

const Card = mongoose.model('Card', cardSchema);

export{ Card };