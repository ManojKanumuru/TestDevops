`use strict`;

const user = require('./../DAL/userDAL.js');

exports.getUserDetails = function(req, res){

	user.getLoginDetails(req, (err, userDetails) => {
		if(err){
			res.send(err);
		}else{
			res.send(userDetails);
		}
	});
}