const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');
 
const url = 'mongodb://localhost/';
const dbName = 'library';
const app = express();

app.use(bodyParser.json());

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  client.close();
});

const insertDocuments = function(db, callback) {
  const collection = db.collection('book');
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
	], function(err, result) {
		assert.equal(err, null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log("Inserted 3 book into the collection");
		callback(result);
  });
}

const findDocuments = function(db, callback) {
  const collection = db.collection('book');
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

app.get('/books',(req,res) => {
	findDocuments(db, function() {
      client.close();
    });
});

app.listen(3002, () => {
    console.log('Server is up on port 3002.')
})


// MongoClient.connect(url, function(err, client) {
  // assert.equal(null, err);
  // console.log("Connected successfully to server");
  // const db = client.db(dbName); 
  // insertDocuments(db, function() {
    // client.close();
  // });
// });
