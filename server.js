const express = require('express');
//const mongoose = require('mongoose');
//const cors = require('cors');
require('dotenv').config();

const app = express();
//app.use(cors());
//app.use(express.json());

//mongoose.connect(process.env.MONGODB_URI);

//const db = mongoose.connection;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/',(req,res) =>{
res.send("hello world");
//save karo
//ek minute
})