
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config()

const uri = process.env.ATLAS_URI

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


module.exports = {
    connecToServer: function(callback) {
        client.connect(
          err => {
            const collection = client.db("test").collection("devices");
            // perform actions on the collection object
            client.close();
          },
          db => {
            console.log('connected to database');
          });
    }
}