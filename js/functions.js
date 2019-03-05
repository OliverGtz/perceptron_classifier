// ========================================================
// ============= output(instance_, weightVector_) =========
// ========================================================
// Linear combination function also known as sign function.
// It returns a predicted output for a single instance in
// the dataset. 
function output(instance_, weightVector_){
	let linearSum = 0;

	// Last column in dataset is the class label (target output)
	// don't include it in the linear combination.
	let nbFeatures = instance_.length -1;

	for(let i = 0; i < nbFeatures; i++){
		// Sigma( xi * wi)
		linearSum += weightVector_[i] * instance_[i];
	}
	
	// Sign function returns 1 if sum > 0 and -1 otherwise
	return ( linearSum > 0 ? 1 : -1 );
}



// ========================================================
// ========= updateWeightVector(instance_, error) =========
// ========================================================
// For a single instance_, update all weights based on formula:
// wi = wi + learningRate * (target_output - expected_output) * xi
function updateWeightVector(instance_, error){
	let trainingRate = 0.1;
	console.log("inside updateWeightVector, with W= " + W);

	// update for every weight in W
	for (let j = 0; j < W.length; j++ ){

		W[j] += trainingRate*error*instance_[j];
		console.log("newWeight for w" + j + " is " + W[j]);
	}
}




// ========================================================
// ============= trainModel(D, interations_) ==============
// ========================================================
// Learning is updating the weight vectors so that our expected
// predictions match our target output. trainModel(D) accepts
// a dataset array with n instances each with k features.
function trainModel(D, iterations_){
	let epochs = iterations_;
	let labelPos = D[0].length -1;			// Class Label is last column on all instances

	// Train model for a specified number of epochs
	for (let index = 0; index < epochs; index++){

		// If the model predicts the output with 100% accuracy,
		// then break early of iterations
		if ( breakEarly){
			console.log("+++++++++++++++ FINISHED EARLY ++++++++++++++");
			break;	
		}

		// Otherwise train model 1 epoch(iteration) at a time
		console.log("EPOCH #" + (index + 1) + "==============================================") ;

		console.log("\nRunning model on training set:");

		// Print out expected output for every instance
		for(let h = 0; h < D.length; h++){
			// console.log("Expected Output for instance#" + (h+1) + " is " + output(D[h], W));
		}

		breakEarly = true;

		// Run perceptron on every instance (Test Data)
		for (let i = 0; i < D.length; i++ ){
			// console.log("\nRunning on instance #" + i);
			let expectedOutput	= output(D[i], W);
			let target					= D[i][labelPos];
			let error 					= target - expectedOutput;

		  // console.log("Error before update is " + error);

			// if there's an error, update the weight vectors
			// Note: error could be negative, so check for error == 0.
			if( error !== 0){
				updateWeightVector(D[i], error);
				breakEarly = false;
			} 

			// Debug info:
			// expectedOutput = output(D[i], W);
			// error = target - expectedOutput;
      // console.log("Error after update is " + error);
		}	

		console.log("\nFinal weight vector: " + W);
		console.log("Final training set: ");
		console.dir(D);
	}
	return W;
}



// ========================================================
// =========== classify(datasete_, weightVector_) =========
// ========================================================
function classify(dataset_, weightVector_){
	let predictions = [];
	let totalInstances = E.length;
	let truePositives = 0;
	let expectedOutput = null;
	for( let i = 0; i < totalInstances; i++){
		expectedOutput = output(dataset_[i], weightVector_);
		predictions.push(expectedOutput);

		console.log("Iteration #" + i + ": Target vs Expected: " + dataset_[i][5] + " : " + expectedOutput);
		
		if ( expectedOutput === dataset_[i][5]){
			truePositives++;
		} else {
			console.error("False Positive");
		}
	}
	correctlyClassifiedRate = (truePositives / totalInstances) * 100;

	console.log("Classified with model: [ " + weightVector_.toString() + " ]");
	console.log("True Positives: " + truePositives);
	console.log("Total Instances: " + totalInstances);
	console.log("Accuracy: " + correctlyClassifiedRate + "%");
}