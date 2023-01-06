import mongoose, { mongo } from "mongoose";
const db = mongoose.connection;

//backwards compat
mongoose.set('strictQuery', false);

//connect to DB
mongoose.connect(process.env.DATABASE_URL);

db.on('connected', ()=> console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`));