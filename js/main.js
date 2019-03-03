// Oliver Gutierrez
// CSE 516 Machine Learning

// Training Set
// 			x0, x1, x2, label(target output)
let D = [ [1, 0, 0, 1],
					[1, 0, 1, -1],
					[1, 1, 0, -1],
					[1, 1, 1, 1] ];

// Weight vector corresponding to x0, x1, x2
let W = [0, 0, 0];
let trainingRate = 0.1;

function output(instance){
	let linearSum = 0;

	for(let i = 0; i < instance.length -1; i++){
		linearSum += W[i] * instance[i];
	}
	
	return ( linearSum > 0 ? 1 : -1 );
}

function updateWeightVector(instance, error){
	console.log("inside updateWeightVector, with W= " + W);
	let maxIter = 100;

	// update for every weight in W
	for (let j = 0; j < W.length; j++ ){
		let currentWeight = W[j];
		let newWeight = -1;
		let iteration = 0;

		// currentWeight !== newWeight || 
		// while (currentWeight !== newWeight){
		while (iteration <= maxIter){
			if ( newWeight == currentWeight){
				W[j] = newWeight;
				console.log("Weight vector not changed, continue...");
				break;
			}
			console.log("Iteration #" + iteration + " of updating vector" + j + ": " + W[j]);
			newWeight = currentWeight + trainingRate*error*instance[j];
			iteration++;
		}

		W[j] = newWeight;
		console.log("newWeight is " + newWeight);
		// console.log( "Weight " + (j+1) " is " + newWeight );
	}

}
// console.log( output(D[3]) );

function trainModel(D){
	// Run perceptron on every instance
	for (let i = 0; i < D.length; i++ ){
		console.log("\nRunning on instance " + i);
		let expectedOutput	= output(D[i]);
		let target					= D[i][3];
		let error 					= target - expectedOutput;

	  console.log("Error before update is " + error);

		// if there's an error, update the weight vectors
		// until we get the right output
		updateWeightVector(D[i], error);
		// console.log("Instance #" + (i + 1) + ": error is " + error);

		expectedOutput = output(D[i]);
		error = target - expectedOutput;
	  console.log("Error after update is " + error);
	}	
}

let epochs = 1;

for (let index = 0; index < epochs; index++){
	console.log("EPOCH #" + (index + 1) + "==============================================") ;
	trainModel(D);
	console.log("Final weight vector: " + W);
	console.log("final trainingset: " + "\n" + D[0] + "\n" + D[1] + "\n" + D[2] + "\n" + D[3]);
}


console.log("\nRunning model on training set:");
for(let h = 0; h < D.length; h++){
	console.log("Expected Output for instance#" + (h+1) + " is " + output(D[h]));
}