// const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
// const helmet = require("helmet");

const express=require('express');
const app = express();
const tasks = require('./routes/tasks')

// middeware-----------------------
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// routes--------------
app.get('/hello',(req,res) =>{
    res.send("Task Manager App")
})

app.use('/api/v1/task',tasks)


const port = 4000
mongoose
  .connect(
    `mongodb+srv://rubi:rubi@cluster0.264g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  
    }
  )
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));


const server = http.createServer(app);

server.listen(port, () => {
  console.log(`local server started on http://localhost:${port}`);

});

























// security
// app.use(helmet());

// // cors
// app.use(cors());

// // convert everything to json
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // // mongodb database connect admin dgeQuatics
// mongoose
//   .connect(
//     `mongodb+srv://aswin:${config.MONGODB_CONNECTON_PWD}@cluster0.mfkse.mongodb.net/chessProject`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("mongodb connected..."))
//   .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("success"));