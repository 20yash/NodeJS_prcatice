const mongoose = require('mongoose')

//define the mongoDB connection URL

const mongoURL= 'mongodb://localhost:27017/hotels'//Replace 'mydatabase' with your database name in URL


//now setting up MongoDB connection
//mongoose.connect() establishes the connection

//also passing two paramenters along with MongoURL here, useNewUrlParser and useUnifiedTopology

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

//define event listner for database connection

db.on('connected',()=>{
    console.log("connected to MongoDB server");
})


db.on('error',(err)=>{
    console.error("error while connecting to MongoDB server",err);
})


db.on('disconnected',()=>{
    console.log("disconnected from MongoDB server");
})

//Now exporting the database connection

module.exports=db;