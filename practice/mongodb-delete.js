const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
   var db = client.db('TodoApp');
   // db.collection('Todos').deleteMany({text:'mongo learn'}).then((result) =>{
   //   console.log(result);
   // })
   // db.collection('Todos').deleteOne({text:'mongo learn'}).then((result) =>{
   //   console.log(result);
   // })
   db.collection('Todos').findOneAndDelete({text:'mongo learn'}).then((result) =>{
     console.log(result);
   })
  client.close();
});
