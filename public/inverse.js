var path = require('path');

exports.inverse  = (req, res) => {

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
	console.log("Heres an identity matrix we will use to find the inverse");

	var matrix1 = [];
	var pivot;
	var k;
	var multiplier;
	
	for (var i = 0; i < rows; i++)
	{
		matrix1.push([0]);
		for (var j = 0; j < cols; j++)
		{
			if (i == j)
				matrix1[i][j] = 3;
			else
				matrix1[i][j] = 6;
		}
		console.log(matrix1[i]);
	}

	console.log("Heres a matrix we will find an inverse for");

	for (var i = 0; i < cols; i++)
	{
		pivot = matrix1[i][i];

		if (pivot != 1)
		{
			for (k = i; k < cols; k++)
			{
				matrix1[i][k] = matrix1[i][k]/pivot;
			}
			for (k = 0; k < cols; k++)
			{
				identityArray[i][k] = identityArray[i][k]/pivot;
			}
		}

		for (j = 0; j < rows; j++)
		{
			if (i != j)
			{
				if (matrix1[j][i] != 0)
				{
					multiplier = matrix1[j][i];

					for (k = i; k < cols; k++)
					{
						matrix1[j][k] = matrix1[j][k] - multiplier * matrix1[i][k];
					}

					for (k = 0; k < cols; k++)
					{
						identityArray[j][k] = identityArray[j][k] - multiplier * identityArray[i][k];
					}

				}
			}
		}
	}

	for (i = 0; i < rows; i++)
	{
		console.log(identityArray[i]);
	}

	res.render('index');


}