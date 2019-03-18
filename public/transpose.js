var path = require('path');

exports.transpose = (req, res) => {

	var rows = 2;
	var columns = 5;

	var matrix = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10]
	];

	var transpose = [];
	var temp;

	for (var i = 0; i < columns; i++)
	{
		transpose.push([0]);
		for (var j = 0; j < rows; j++)
		{
			temp = matrix[j][i]
			transpose[i][j] = temp;
		}
		console.log(transpose[i]);
	}

	res.render("index");


}