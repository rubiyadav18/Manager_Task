const http = require("http");
const app = require("./app");
const mongoose = require('mongoose')


const port = process.env.PORT || 4000;
mongoose
  .connect(
    `mongodb+srv://rubi:rubi@cluster0.264g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    }
  )
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));


const server = http.createServer(app);

server.listen(port, () => {
  console.log(`local server started on http://localhost:${port}`);

});
