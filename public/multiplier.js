var path = require('path');

exports.multiply = (req, res) => {

	var firstMatrix = [];
	var rowsFirst = 5;
	var colsFirst = 5;

	var secondMatrix = []
	var rowsSecond = 5;
	var colsSecond = 5;

	for (var i = 0; i < rowsFirst; i++)
	{
		firstMatrix.push([0]);
		for (var j = 0; j < colsFirst; j++)
		{
			if (i == j)
			{
				firstMatrix[i][j] = 2;				
			}
			else 
			{
				firstMatrix[i][j] = 1;
			}

		}
		console.log(firstMatrix[i]);
	}
	console.log("Heres the first matrix");

	for (var i = 0; i < rowsSecond; i++)
	{
		secondMatrix.push([0]);
		for (var j = 0; j < colsSecond; j++)
		{
			if (i == j)
			{
				secondMatrix[i][j] = 3;
			}
			else 
			{
				secondMatrix[i][j] = 5;
			}

		}
		console.log(secondMatrix[i]);
	}
	console.log("Heres a second matrix, lets multiply them");

	var finalMatrix = []
	var sum;
	var finalRows = rowsFirst;
	var finalCols = colsSecond;
	var rowsSecondColumnsFirst = rowsSecond;

	for (var i = 0; i < finalRows; i++)
	{
		finalMatrix.push([0]);
		for (var j = 0; j < finalCols; j++)
		{
			sum = 0;
			for (var k = 0; k < rowsSecondColumnsFirst; k++)
			{
				sum += firstMatrix[i][k] * secondMatrix[k][j];
			}
			finalMatrix[i][j] = sum;

		}
		console.log(finalMatrix[i]);
	}
	console.log("Heres our multiplied matrix");

	res.render("index");


}