var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";





MongoClient.connect(url,function(err,db){
if (err) throw err;
var myobj = [
    {name:'Company Incredible', address:'Bremen, Germany'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'}
    ];




db.collection("customers").insertMany(myobj, function(err,res){
	if(err) throw err;
	
	console.log("num of docs inserted: "+ res.insertedCount);
	db.close();
});
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find({}, { _id: false }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});









//Database creation
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //Create a collection name "customers":
  db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
*/