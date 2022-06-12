const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 7070;
// const dotenv = require("dotenv");
const stripe = require("stripe")('sk_test_51JwOogAoCSeLW1ZZZyLXZTUYhQgmVPcA80LyA3fKsRrAcZYaoL4vdMrfshJHKPA068ze8pmrnuuZROEMBvuIMqAx00wm8Zy86I');
const connectDB = require("./config/db");
// dotenv.config();

// route handler 

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes")
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

// db connernt 

connectDB()

// const uri = "mongodb+srv://trusell:KydYhnXqPsjQRVgA@cluster0.hty68.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


// default error handler 

app.use(errorHandler)



// test route 

app.get("/", (req,res) =>{
    res.send("ownsell server")
})


// payment post route
app.post("/create-payment-intent", async (req, res) => {
    try {
      const products = req.body;
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 20000,
        currency: "usd",
        payment_method_types: ["card"],
      });
  
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  




app.listen(port,()=>{
    console.log("listening port" + port)
})