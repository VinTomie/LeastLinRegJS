var path = require('path');

function getInverseMatrix(matrix, rows, cols)
{
	var identity = makeIdentityMatrix(rows, cols);
	var k;
	//console.log(identity);

	if (rows == 1)
		return;

	for (var i = 0; i < cols; i++)
	{
		pivot = matrix[i][i];

		if (pivot != 1)
		{
			for (k = i; k < cols; k++)
			{
				matrix[i][k] = matrix[i][k]/pivot;
			}
			for (k = 0; k < cols; k++)
			{
				identity[i][k] = identity[i][k]/pivot;
			}
		}

		for (j = 0; j < rows; j++)
		{
			if (i != j)
			{
				if (matrix[j][i] != 0)
				{
					multiplier = matrix[j][i];

					for (k = i; k < cols; k++)
					{
						matrix[j][k] = matrix[j][k] - multiplier * matrix[i][k];
					}

					for (k = 0; k < cols; k++)
					{
						identity[j][k] = identity[j][k] - multiplier * identity[i][k];
					}

				}
			}
		}
	}

	for (i = 0; i < rows; i++)
	{
		//console.log(identity[i]);
	}

	return identity;
}

function multiplyMatrix(matrix1, matrix2, rowsFirst, colsSecond, rowsSecondColumnsFirst)
{
	var finalMatrix = []
	var sum;


	for (var i = 0; i < rowsFirst; i++)
	{
		finalMatrix.push([0]);

		for (var j = 0; j < colsSecond; j++)
		{
			sum = 0;
			for (var k = 0; k < rowsSecondColumnsFirst; k++)
			{
				if (colsSecond > 1)
				{
					sum += matrix1[i][k] * matrix2[k][j];
				}
				else 
					sum += matrix1[i][k] * matrix2[k];

				
			}

			//console.log("The overall sum is " + sum);

			if (colsSecond > 1)
				finalMatrix[i][j] = sum;
			else
				finalMatrix[i] = sum;

		}
		//console.log(finalMatrix[i]);
	}
	//console.log("Heres our multiplied matrix");

	return finalMatrix;
}

function makeIdentityMatrix(rows, cols)
{
	var identityArray = [];

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
		//console.log(identityArray[i]);
	}

	return identityArray;
}

function transposeMatrix(arr)
{
	var rows = arr.length;
	var columns = arr[0].length;

	var transpose = [];
	var temp;

	for (var i = 0; i < columns; i++)
	{
		transpose.push([0]);
		for (var j = 0; j < rows; j++)
		{
			temp = arr[j][i]
			transpose[i][j] = temp;
		}
		//console.log(transpose[i]);
	}
	//console.log("This is the transpose");

	return transpose;
}

exports.learn = (req, res) => {



	var vector = [];
	var weights = [];
	var final = [];

	var trainingArray = [
	[3, 1, 1180, 1955, 221900],
	[3, 2.25, 2570, 1951, 538000],
	[2, 1, 770, 1933, 180000],
	[4, 3, 1960, 1965, 604000],
	[3, 2, 1680, 1987, 510000],
	[4, 4.5, 5420, 2001, 1230000],
	[3, 2.25, 1715, 1995, 257500]
	];

	var testArray = [
	[3, 2.5, 3560, 1965],
	[2, 1, 1160, 1942]
	];

	var rows = trainingArray.length;
	var cols = trainingArray[0].length;

	var points = testArray.length;

	for (var i = 0; i < trainingArray.length; i++)
	{
		trainingArray[i].unshift(1);
		vector[i] = trainingArray[i][cols]; 
		delete trainingArray[i][cols];
	}
	//console.log(trainingArray);

	for (var i = 0; i < testArray.length; i++)
	{
		testArray[i].unshift(1);
	}

	var temp;
	var temp2;
	var temp3;
	var transposed;
	transposed = transposeMatrix(trainingArray);

	temp = multiplyMatrix(transposed, trainingArray, cols, cols, rows);
	temp2 = getInverseMatrix(temp, cols, cols);
	temp3 = multiplyMatrix(temp2, transposed, cols, rows, cols);
	weights = multiplyMatrix(temp3, vector, cols, 1, rows);
	final = multiplyMatrix(testArray, weights, points, 1, cols);

	console.log(final);

	//var transpose = tranpose()
	res.render("index");



}