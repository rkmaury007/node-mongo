const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
   var db = client.db('TodoApp');
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//   client.close();
// });
//Insert new doc into Users (name, age, location)
  // var db = client.db('TodoApp');
  // db.collection('Users').insertOne({
  //   _id:111,
  //   name: 'Rahul',
  //   age: 25,
  //   location: 'BANG'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops);
  // });
  db.collection('Users').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log(result.name);
    client.close();
  });
  client.close();
});
