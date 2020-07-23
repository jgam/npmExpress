import mongoose from 'mongoose';
import dotenv from 'dotenv';
<<<<<<< HEAD
=======

>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅  Connected to DB');
<<<<<<< HEAD
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);
=======
const handleError = (error) => console.log(`❌ Error on DB Connection:${error}`);
>>>>>>> affb1f5b3451c03d0252ee4e47fe7a67efca3a95

db.once('open', handleOpen);
db.on('error', handleError);
