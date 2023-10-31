import express from "express";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
// import products
import products from "./data/products.js";

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

// Route  for all products.
app.get("/api/products", (req, res) => { 
    res.json(products);

})

// Create a route for a single product.

app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})


// Start the server by listening on the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})

// NPM start