// Oliver Gutierrez
// CSE 516 Machine Learning
// Final project: Option 1
// Binary Classification of Iris Plants Using Single-Layer Perceptron Algorithm


// Training Data in data.js
// Test Data in data.js


// Cache HTML elements:
let trainModelBtn = document.getElementById("train_model_btn");
let testDataBtn = document.getElementById("test_data_btn");
let trainedModelP = document.getElementById("trained_model_p");

// Event Listeners:

trainModelBtn.addEventListener('click', function(){
	console.clear();
	// Train with training data D[];
	let trainedModel = trainModel(D, 2);

	let vectorString = "";
	for (let i = 0; i < trainedModel.length; i++){
		vectorString += trainedModel[i];
		if (i !== trainedModel.length-1) vectorString += ", ";
	}

	trainedModelP.innerHTML = "W2 = [ " + vectorString + " ]";
});

testDataBtn.addEventListener('click', function(){
	// Cache input weight vector:
	let w0 = document.getElementById("w0").value || 0;
	let w1 = document.getElementById("w1").value || 0;
	let w2 = document.getElementById("w2").value || 0;
	let w3 = document.getElementById("w3").value || 0;
	let w4 = document.getElementById("w4").value || 0;

	let inputWeightVector = [w0, w1, w2, w3, w4];
	console.clear();

	// Classify new data
	classify(E, inputWeightVector);
});



// Initial Weight vector corresponds to every feature
// in our dataset:
// 				x0 , x1, x2, x3, x4
const W = [0,   0,  0,  0,  0];

let breakEarly = false;
let epochs = 5;

// Saved models from previous data
//Model from training iris-modified.setAB data (full set):
// W2 = [0.2,-0.06666666680000002,0.2416666666,-0.23414634120000002,-0.22352941200000004];

//Model from training iris-modified-setAB.csv data ( about 60 instances);
// W3 = [0.2,-0.15555555580000002,0.1499999998,-0.2585365854,-0.27058823540000004];

// Now Classify with new data.
// Test data , E[], brought it from /js/data.js

let correctlyClassifiedRate = 0;