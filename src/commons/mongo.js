var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

var db;

let connectDB = function(){
  return MongoClient.connect(url, function(err, db) {
      if (err){
        return err;
      }else{
        return db;
      }
  });
}


function dbOperations(Obj, callback) {

  this.getConnection = function(){
    if(db.readyState){
      console.log("already connected DB"+db);
      return db;
    }else{          
      db = connectDB();
      return db;
    }
  }

  this.getData = function(Obj, callback){
    let db = this.getConnection();
    db.collection(Obj.collectionName).findOne({}, function(err, result){
      if(err){
        return callback(err);
      }else{
        return callback(null, result);
      }
    });
  }
}

module.exports = dbOperations;