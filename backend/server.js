import express from "express";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
// import products

import productRoutes from "./routes/productRoutes.js";  

// Connect to mongoDB
connectDB(); 


// create a variable for the port
const port = process.env.PORT;




// create an express app
const app = express();

// create a  route that has request and a response object.
app.get("/", (req, res) => {
    res.send("API is running");
});


app.use("/api/products", productRoutes);




// Start the server by listening on the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})

// NPM start