const express = require("express");
const app = express();
const port = 7777;

// To read the .env file
const dotenv = require("dotenv");
dotenv.config();

//CORS ACCESS CONTROL
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// For get and post request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Static File
app.use(express.static("public"));

// Routes
app.use("/", require("./routes/userRoute"));

app.use(require('./middlewares/tokenVerify'));

app.use("/dashboard",require("./routes/dashboardRoute"));

// Error404 
app.use(require("./utils/error404"));


// Server Started
const server = app.listen(process.env.PORT || port, () => {
  console.log("Server Started at " +port);
});