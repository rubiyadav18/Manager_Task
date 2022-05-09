
const mongoose = require("mongoose");
const http = require("http");

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require('../mongodbProject/middleware/not-found')

// middeware-----------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes--------------
// app.get('/hello',(req,res) =>{
//     res.send("Task Manager App")
// })

app.use("/api/v1/task", tasks);
app.use(notFound);

const port = 9000;
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

