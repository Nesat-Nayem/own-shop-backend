const express = require("express");
const cors = require("cors");
// const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 7070;
// const dotenv = require("dotenv");

// cludanary imge upload 

const multer = require("multer");
const path = require("path")
const fs = require('fs');

// cludanary imge upload 


const stripe = require("stripe")('sk_test_51JwOogAoCSeLW1ZZZyLXZTUYhQgmVPcA80LyA3fKsRrAcZYaoL4vdMrfshJHKPA068ze8pmrnuuZROEMBvuIMqAx00wm8Zy86I');
const connectDB = require("./config/db");
// dotenv.config();

// route handler 

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")
const categoryRoutes = require("./routes/category")
const providerRoutes = require("./routes/providerRoutes")
const reviewRoutes = require("./routes/review")
// const  creatProvider  = require("./controllers/providerControler");


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
app.use("/api/orders", orderRoutes);
app.use("/api", categoryRoutes);
app.use("/api", providerRoutes);
app.use("/api/postreview", reviewRoutes);


// default error handler 

app.use(errorHandler)



// test route 

app.get("/", (req,res) =>{
    res.send("ownsell server is running  ...")
})

// payment route 

// app.get("/checkout/:id"),async(req,res) =>{
//   try{
//     const id = req.params.id;
//     const query = {_id:ObjectId(id)}
//     const result = await Products.findOne(query);
//     res.json(result)
//   }catch (error) {
//     res.status(500).send(error.message);
//   }
// }


// image upload cludanary 



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, 'uploads1'))
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
  }
})


const uploads = multer({ storage: storage });

app.use(uploads.any());

app.use(express.static('./public'));


//if you need to download (after upload) files in cloudinary 
const cloudinary = require('cloudinary');

cloudinary.config({
  
  cloud_name: 'drulco0au',
  api_key: '531544281519878',
  api_secret: 'J9GmJ2zFADfS5ZYZ5cgymCrkT_g'
});

//if you need to del files after upload


async function upload(file) {
  const params = { public_id: `${Date.now()}`, resource_type: 'auto' }
  return cloudinary.uploader.upload(file.path, params);
}

async function unlink(file) {
  return new Promise((resolve, reject) => {
      fs.unlink(file.path, error => error ? reject(error) : resolve());
  });
}

async function uploadAndUnlink(file) {
  try {
      const url = await upload(file);
      await unlink(file);
      return url
  } catch (err) {
      console.log(err);
  }
}


// async function run() {

//   try {
//       await client.connect();
      // const database = client.db("unityMart");
      // const unityMartMediaCollection = database.collection("media");

      // MEDIA
      app.post('/media', async (req, res, next) => {
          console.log('hello')
          const images = req.body.images
          const promises = req.files.map(file => uploadAndUnlink(file));
          const urls = await Promise.all(promises);
          var m = new Date();
          var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds();
          const media =  {urls: urls.map(url => url.url)}
          console.log(media)

          res.json(media.urls);
      });




//   } finally {


//   }
// }





// image upload cludanary 


// payment post route
app.post("/create-payment-intent", async (req, res) => {
    try {
      const products = req.body;
      // console.log(products?.price)
      const amount = products.price*100;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
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