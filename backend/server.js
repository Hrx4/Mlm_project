const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require('body-parser')
const dotenv = require('dotenv');


const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

dotenv.config()

mongoose.set('strictQuery', true);

const connectDB = async() => {
  try {
      const conn = await mongoose.connect("mongodb+srv://kamal:hVZTyTpIeyIKcmpy@cluster0.xtly9.mongodb.net/" );
      console.log(`Mongo Connected ${conn.connection.host}`);

  } catch (error) {
      console.log(`Error : ${error.message}`);
      process.exit();
  }
};
connectDB()

app.get('/', (req, res) => {
  res.send('Hello, World! This is my Express server!');
});
app.use('/user' , require('./Routes/userRoute'))
app.use('/userlist' , require('./Routes/idList'))
app.use('/login' , require('./Routes/loginRoute'))

app.listen(8080, () => {
  console.log(`Server is running on Port 8080`);
});