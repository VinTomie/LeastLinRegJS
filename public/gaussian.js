var path = require('path');

exports.identityMatrix = (req, res) => {

	var identityArray = [];
	var rows = 5;
	var cols = 5;

	for (var i = 0; i < rows; i++)
	{
		identityArray.push([0]);
		for (var j = 0; j < cols; j++)
		{
			if (i == j)
				identityArray[i][j] = 1;
			else 
				identityArray[i][j] = 0;

		}
		console.log(identityArray[i]);
	}
	console.log("Heres an identity matrix");

	res.render('index');


}