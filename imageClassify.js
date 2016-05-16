var brain = require('brain');
var fs = require('fs');

/**
 * Get the mnist digit
 * @type {MNIST|exports|module.exports}
 */
var mnist = require('mnist');
var set = mnist.set(800, 20);
var trainingSet = set.training;
var testSet = set.test;
var net = new brain.NeuralNetwork({hiddenLayers: [784, 392, 196]});
net.train(trainingSet, {
    errorThresh: 0.025,
    log: true,
    logPeriod: 1,
    learningRate: 0.1
});

for (i = 0; i < testSet.length; i++) {
    console.log(testSet[0])

    var resultArr = net.run(testSet[i].input);
    var result = resultArr.indexOf(Math.max.apply(Math, resultArr));
    var actual = testSet[i].output.indexOf(Math.max.apply(Math, testSet[i].output));
    console.log(result + " Actual " +actual );
}










