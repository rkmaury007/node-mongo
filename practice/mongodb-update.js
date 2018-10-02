//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  var db = client.db('TodoApp');
  db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID('5bb0e09f7611dc2e282812f3')
  },
  {
    $set:{
      text:'update text'
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
  client.close();
});
