

require("dotenv").config();
const express = require("express");

const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

const productRoutes = require("./Routes/productRoute");
app.use("/products", productRoutes);



app.listen(PORT, () => {
    console.log(`${PORT}  is Listening`)
    
})


