const express = require("express");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// username: trusell
// pass: KydYhnXqPsjQRVgA

// mongo url and client //
// mongo url and client //


// db connernt 


const uri = "mongodb+srv://trusell:KydYhnXqPsjQRVgA@cluster0.hty68.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// db connernt 

// const uri = "mongodb+srv://trusell:KydYhnXqPsjQRVgA@cluster0.avm9c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


async function run() {
  try {
    // databases here
    await client.connect();
    console.log('connection success')
    const database = client.db("trusell");
    const productCollection = database.collection("products");
    const userCollection = database.collection("users");

// get products

app.get("/products", async (req, res) => {
  const cursor = productCollection.find({});
  const result = await cursor.toArray();
  res.json(result)
})






// get one product by id 

app.get("/products/:id", async (req,res)=>{
  const id = parseInt(req.params.id);
  const quiry = {id:id};
  const result = await productCollection.findOne(quiry);

  res.json(result)
})

// get product by catagory 

app.get("/products/category/:cagegory", async(req,res)=>{
  const category = req.params.cagegory;
  const quiry = {category:category}
  const result = await productCollection.find(quiry).toArray();
  res.json(result)

})


  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Own sel server");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});