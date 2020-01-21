// x0 	-> bias (always = 1)
// x2		-> feature 1
// x3		-> feature 2
// x4		-> feature 3
// x5		-> feature 4
// x6		-> class label (1=Iris-Setosa and -1=Iris-Versicolor)
const dataset = [
[1,0.296296296,0.625,0.097560976,0.058823529,1],
[1,0.222222222,0.416666667,0.097560976,0.058823529,1],
[1,0.148148148,0.5,0.073170732,0.058823529,1],
[1,0.111111111,0.458333333,0.12195122,0.058823529,1],
[1,0.259259259,0.666666667,0.097560976,0.058823529,1],
[1,0.407407407,0.791666667,0.170731707,0.176470588,1],
[1,0.111111111,0.583333333,0.097560976,0.117647059,1],
[1,0.259259259,0.583333333,0.12195122,0.058823529,1],
[1,0.037037037,0.375,0.097560976,0.058823529,1],
[1,0.222222222,0.458333333,0.12195122,0,1],
[1,0.407407407,0.708333333,0.12195122,0.058823529,1],
[1,0.185185185,0.583333333,0.146341463,0.058823529,1],
[1,0.185185185,0.416666667,0.097560976,0,1],
[1,0,0.416666667,0.024390244,0,1],
[1,0.555555556,0.833333333,0.048780488,0.058823529,1],
[1,0.518518519,1,0.12195122,0.176470588,1],
[1,0.407407407,0.791666667,0.073170732,0.176470588,1],
[1,0.296296296,0.625,0.097560976,0.117647059,1],
[1,0.518518519,0.75,0.170731707,0.117647059,1],
[1,0.296296296,0.75,0.12195122,0.117647059,1],
[1,0.407407407,0.583333333,0.170731707,0.058823529,1],
[1,0.296296296,0.708333333,0.12195122,0.176470588,1],
[1,0.111111111,0.666666667,0,0.058823529,1],
[1,0.296296296,0.541666667,0.170731707,0.235294118,1],
[1,0.185185185,0.583333333,0.219512195,0.058823529,1],
[1,0.259259259,0.416666667,0.146341463,0.058823529,1],
[1,0.259259259,0.583333333,0.146341463,0.176470588,1],
[1,0.333333333,0.625,0.12195122,0.058823529,1],
[1,0.333333333,0.583333333,0.097560976,0.058823529,1],
[1,0.148148148,0.5,0.146341463,0.058823529,1],
[1,0.185185185,0.458333333,0.146341463,0.058823529,1],
[1,0.407407407,0.583333333,0.12195122,0.176470588,1],
[1,0.333333333,0.875,0.12195122,0,1],
[1,0.444444444,0.916666667,0.097560976,0.058823529,1],
[1,0.222222222,0.458333333,0.12195122,0.058823529,1],
[1,0.259259259,0.5,0.048780488,0.058823529,1],
[1,0.444444444,0.625,0.073170732,0.058823529,1],
[1,0.222222222,0.666666667,0.097560976,0,1],
[1,0.037037037,0.416666667,0.073170732,0.058823529,1],
[1,0.296296296,0.583333333,0.12195122,0.058823529,1],
[1,0.259259259,0.625,0.073170732,0.117647059,1],
[1,0.074074074,0.125,0.073170732,0.117647059,1],
[1,0.037037037,0.5,0.073170732,0.058823529,1],
[1,0.259259259,0.625,0.146341463,0.294117647,1],
[1,0.296296296,0.75,0.219512195,0.176470588,1],
[1,0.185185185,0.416666667,0.097560976,0.117647059,1],
[1,0.296296296,0.75,0.146341463,0.058823529,1],
[1,0.111111111,0.5,0.097560976,0.058823529,1],
[1,0.37037037,0.708333333,0.12195122,0.058823529,1],
[1,0.259259259,0.541666667,0.097560976,0.058823529,1],
[1,1,0.5,0.902439024,0.764705882,-1],
[1,0.777777778,0.5,0.853658537,0.823529412,-1],
[1,0.962962963,0.458333333,0.951219512,0.823529412,-1],
[1,0.444444444,0.125,0.731707317,0.705882353,-1],
[1,0.814814815,0.333333333,0.87804878,0.823529412,-1],
[1,0.518518519,0.333333333,0.853658537,0.705882353,-1],
[1,0.740740741,0.541666667,0.902439024,0.882352941,-1],
[1,0.222222222,0.166666667,0.56097561,0.529411765,-1],
[1,0.851851852,0.375,0.87804878,0.705882353,-1],
[1,0.333333333,0.291666667,0.707317073,0.764705882,-1],
[1,0.259259259,0,0.609756098,0.529411765,-1],
[1,0.592592593,0.416666667,0.780487805,0.823529412,-1],
[1,0.62962963,0.083333333,0.731707317,0.529411765,-1],
[1,0.666666667,0.375,0.902439024,0.764705882,-1],
[1,0.481481481,0.375,0.634146341,0.705882353,-1],
[1,0.888888889,0.458333333,0.829268293,0.764705882,-1],
[1,0.481481481,0.416666667,0.853658537,0.823529412,-1],
[1,0.555555556,0.291666667,0.756097561,0.529411765,-1],
[1,0.703703704,0.083333333,0.853658537,0.823529412,-1],
[1,0.481481481,0.208333333,0.707317073,0.588235294,-1],
[1,0.592592593,0.5,0.926829268,1,-1],
[1,0.666666667,0.333333333,0.731707317,0.705882353,-1],
[1,0.740740741,0.208333333,0.951219512,0.823529412,-1],
[1,0.666666667,0.333333333,0.902439024,0.647058824,-1],
[1,0.777777778,0.375,0.804878049,0.705882353,-1],
[1,0.851851852,0.416666667,0.829268293,0.764705882,-1],
[1,0.925925926,0.333333333,0.926829268,0.764705882,-1],
[1,0.888888889,0.416666667,0.975609756,0.941176471,-1],
[1,0.62962963,0.375,0.853658537,0.823529412,-1],
[1,0.518518519,0.25,0.609756098,0.529411765,-1],
[1,0.444444444,0.166666667,0.682926829,0.588235294,-1],
[1,0.444444444,0.166666667,0.658536585,0.529411765,-1],
[1,0.555555556,0.291666667,0.707317073,0.647058824,-1],
[1,0.62962963,0.291666667,1,0.882352941,-1],
[1,0.407407407,0.416666667,0.853658537,0.823529412,-1],
[1,0.62962963,0.583333333,0.853658537,0.882352941,-1],
[1,0.888888889,0.458333333,0.902439024,0.823529412,-1],
[1,0.740740741,0.125,0.829268293,0.705882353,-1],
[1,0.481481481,0.416666667,0.756097561,0.705882353,-1],
[1,0.444444444,0.208333333,0.731707317,0.705882353,-1],
[1,0.444444444,0.25,0.829268293,0.647058824,-1],
[1,0.666666667,0.416666667,0.87804878,0.764705882,-1],
[1,0.555555556,0.25,0.731707317,0.647058824,-1],
[1,0.259259259,0.125,0.56097561,0.529411765,-1],
[1,0.481481481,0.291666667,0.780487805,0.705882353,-1],
[1,0.518518519,0.416666667,0.780487805,0.647058824,-1],
[1,0.518518519,0.375,0.780487805,0.705882353,-1],
[1,0.703703704,0.375,0.804878049,0.705882353,-1],
[1,0.296296296,0.208333333,0.487804878,0.588235294,-1],
[1,0.518518519,0.333333333,0.756097561,0.705882353,-1] ];
// console.dir(dataset);

// Training Data:
// Dataset: modified Iris-dataset from (http://archive.ics.uci.edu/ml/machine-learning-databases/iris/)
// One of the three classes was removed to ensure dataset was linearly separable. Additionally, the 
// values were normalized to be in the range: [0, 1].
// x0 	-> bias (always = 1)
// x2		-> feature 1 = Sepal Length
// x3		-> feature 2 = Sepal Width
// x4		-> feature 3 = Petal Length
// x5		-> feature 4 = Petal Width
// x6		-> class label (1=Iris-Setosa and -1=Iris-Versicolor)
const D = [
[1,0.407407407,0.583333333,0.170731707,0.058823529,1],
[1,0.296296296,0.708333333,0.12195122,0.176470588,1],
[1,0.111111111,0.666666667,0,0.058823529,1],
[1,0.296296296,0.541666667,0.170731707,0.235294118,1],
[1,0.185185185,0.583333333,0.219512195,0.058823529,1],
[1,0.259259259,0.416666667,0.146341463,0.058823529,1],
[1,0.259259259,0.583333333,0.146341463,0.176470588,1],
[1,0.333333333,0.625,0.12195122,0.058823529,1],
[1,0.333333333,0.583333333,0.097560976,0.058823529,1],
[1,0.148148148,0.5,0.146341463,0.058823529,1],
[1,0.185185185,0.458333333,0.146341463,0.058823529,1],
[1,0.407407407,0.583333333,0.12195122,0.176470588,1],
[1,0.333333333,0.875,0.12195122,0,1],
[1,0.444444444,0.916666667,0.097560976,0.058823529,1],
[1,0.222222222,0.458333333,0.12195122,0.058823529,1],
[1,0.259259259,0.5,0.048780488,0.058823529,1],
[1,0.037037037,0.5,0.073170732,0.058823529,1],
[1,0.222222222,0.666666667,0.097560976,0,1],
[1,0.037037037,0.416666667,0.073170732,0.058823529,1],
[1,0.296296296,0.583333333,0.12195122,0.058823529,1],
[1,0.259259259,0,0.609756098,0.529411765,-1],
[1,0.592592593,0.416666667,0.780487805,0.823529412,-1],
[1,0.62962963,0.083333333,0.731707317,0.529411765,-1],
[1,0.666666667,0.375,0.902439024,0.764705882,-1],
[1,0.481481481,0.375,0.634146341,0.705882353,-1],
[1,0.888888889,0.458333333,0.829268293,0.764705882,-1],
[1,0.481481481,0.416666667,0.853658537,0.823529412,-1],
[1,0.555555556,0.291666667,0.756097561,0.529411765,-1],
[1,0.703703704,0.083333333,0.853658537,0.823529412,-1],
[1,0.481481481,0.208333333,0.707317073,0.588235294,-1],
[1,0.592592593,0.5,0.926829268,1,-1],
[1,0.666666667,0.333333333,0.731707317,0.705882353,-1],
[1,0.740740741,0.208333333,0.951219512,0.823529412,-1],
[1,0.666666667,0.333333333,0.902439024,0.647058824,-1],
[1,0.777777778,0.375,0.804878049,0.705882353,-1],
[1,0.851851852,0.416666667,0.829268293,0.764705882,-1],
[1,0.925925926,0.333333333,0.926829268,0.764705882,-1],
[1,0.888888889,0.416666667,0.975609756,0.941176471,-1],
[1,0.62962963,0.375,0.853658537,0.823529412,-1],
];


// New training set E (Test Data, unseen to W3):
const E = [
[1,0.518518519,0.25,0.609756098,0.529411765,-1],
[1,0.444444444,0.166666667,0.682926829,0.588235294,-1],
[1,0.444444444,0.166666667,0.658536585,0.529411765,-1],
[1,0.555555556,0.291666667,0.707317073,0.647058824,-1],
[1,0.62962963,0.291666667,1,0.882352941,-1],
[1,0.407407407,0.416666667,0.853658537,0.823529412,-1],
[1,0.62962963,0.583333333,0.853658537,0.882352941,-1],
[1,0.888888889,0.458333333,0.902439024,0.823529412,-1],
[1,0.740740741,0.125,0.829268293,0.705882353,-1],
[1,0.481481481,0.416666667,0.756097561,0.705882353,-1],
[1,0.444444444,0.208333333,0.731707317,0.705882353,-1],
[1,0.444444444,0.25,0.829268293,0.647058824,-1],
[1,0.666666667,0.416666667,0.87804878,0.764705882,-1],
[1,0.555555556,0.25,0.731707317,0.647058824,-1],
[1,0.259259259,0.125,0.56097561,0.529411765,-1],
[1,0.481481481,0.291666667,0.780487805,0.705882353,-1],
[1,0.518518519,0.416666667,0.780487805,0.647058824,-1],
[1,0.518518519,0.375,0.780487805,0.705882353,-1],
[1,0.703703704,0.375,0.804878049,0.705882353,-1],
[1,0.296296296,0.208333333,0.487804878,0.588235294,-1],
[1,0.518518519,0.333333333,0.756097561,0.705882353,-1],
[1,0.259259259,0.625,0.073170732,0.117647059,1],
[1,0.444444444,0.625,0.073170732,0.058823529,1],
[1,0.259259259,0.625,0.146341463,0.294117647,1],
[1,0.296296296,0.75,0.219512195,0.176470588,1],
[1,0.185185185,0.416666667,0.097560976,0.117647059,1],
[1,0.296296296,0.75,0.146341463,0.058823529,1],
[1,0.111111111,0.5,0.097560976,0.058823529,1],
[1,0.37037037,0.708333333,0.12195122,0.058823529,1],
[1,0.259259259,0.541666667,0.097560976,0.058823529,1],
[1,1,0.5,0.902439024,0.764705882,-1],
[1,0.777777778,0.5,0.853658537,0.823529412,-1],
[1,0.962962963,0.458333333,0.951219512,0.823529412,-1],
[1,0.444444444,0.125,0.731707317,0.705882353,-1],
[1,0.814814815,0.333333333,0.87804878,0.823529412,-1],
[1,0.518518519,0.333333333,0.853658537,0.705882353,-1],
[1,0.740740741,0.541666667,0.902439024,0.882352941,-1],
[1,0.222222222,0.166666667,0.56097561,0.529411765,-1],
[1,0.851851852,0.375,0.87804878,0.705882353,-1],
[1,0.333333333,0.291666667,0.707317073,0.764705882,-1],
[1,0.296296296,0.625,0.097560976,0.058823529,1],
[1,0.222222222,0.416666667,0.097560976,0.058823529,1],
[1,0.148148148,0.5,0.073170732,0.058823529,1],
[1,0.111111111,0.458333333,0.12195122,0.058823529,1],
[1,0.259259259,0.666666667,0.097560976,0.058823529,1],
[1,0.407407407,0.791666667,0.170731707,0.176470588,1],
[1,0.111111111,0.583333333,0.097560976,0.117647059,1],
[1,0.259259259,0.583333333,0.12195122,0.058823529,1],
[1,0.037037037,0.375,0.097560976,0.058823529,1],
[1,0.222222222,0.458333333,0.12195122,0,1],
[1,0.407407407,0.708333333,0.12195122,0.058823529,1],
[1,0.185185185,0.583333333,0.146341463,0.058823529,1],
[1,0.185185185,0.416666667,0.097560976,0,1],
[1,0,0.416666667,0.024390244,0,1],
[1,0.555555556,0.833333333,0.048780488,0.058823529,1],
[1,0.518518519,1,0.12195122,0.176470588,1],
[1,0.407407407,0.791666667,0.073170732,0.176470588,1],
[1,0.296296296,0.625,0.097560976,0.117647059,1],
[1,0.518518519,0.75,0.170731707,0.117647059,1],
[1,0.296296296,0.75,0.12195122,0.117647059,1]
];

export {E, D};