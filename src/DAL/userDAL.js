'use strict';

/*import mongo from './../commons/mongo';*/

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";


exports.getLoginDetails = function(req, callback){
	
	/*let request = req;
		request.collectionName = "users";
		let dbOperations = mongo.dbOperations;
	dbOperations.getData(request, callback);*/

	MongoClient.connect(url, function(err, db) {
		if(err){
			return callback(err);
		}else{
			var singledb = db.db("local");
			singledb.collection("users").findOne({}, function(err, result){
		      if(err){
		        return callback(err);
		      }else{
		      	console.log("result after from db:"+JSON.stringify(result));
		      	db.close();
		      	console.log("connection closed:");
		        return callback(null, result);
		      }
		    });
		}
	});
}