// Oliver Gutierrez
// CSE 516 Machine Learning
// Final project: Option 1
// Binary Classification of Iris Plants Using Single-Layer Perceptron Algorithm


// import test and training data from data.js
import { E as testData, D as trainingData} from "./data.js";
import { classify, trainModel } from "./functions.js";

// Cache HTML elements:
let trainModelBtn = document.getElementById("train_model_btn");
let testDataBtn = document.getElementById("test_data_btn");
const trainedModelP = document.getElementById("trained_model_p");
const trainedModelWeights = document.querySelectorAll('.weight-vector-trained span');

// Initial Weight vector corresponds to every feature in our dataset:
// 		  x0 , x1, x2, x3, x4
const W = [0,   0,  0,  0,  0];
let epochs = 5;


// Function definitions
function handleTrainBtn(){
	console.clear();
	let trainedModel = trainModel(trainingData, epochs, W);

	trainedModel.forEach((el, i) => {
		trainedModelWeights[i].textContent = el.toFixed(4);
	})
}
function handleTestBtn(){
	// Cache user input for weight vector to classify data with:
	const model = Array.from(document.querySelectorAll('.weight-vector'))
				.map(w => w.value || 0);

	console.clear();
	// Classify new data
	classify(testData, model);
}


// Event Listeners:
trainModelBtn.addEventListener('click', handleTrainBtn);
testDataBtn.addEventListener('click', handleTestBtn);