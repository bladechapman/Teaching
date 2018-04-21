const fs = require('fs');
const gaussian = require('gaussian');
const stats = require('stats-lite');

const DATA_PATH = './data/diabetes.txt';
const rawData = fs.readFileSync(DATA_PATH, {
    encoding: 'utf8'
});

const lines = rawData.split('\n');
const cleanData = lines.map(line => line.split(',').map(i => parseFloat(i)));


function buildNormalDistribution(data) {
    const mean = stats.mean(data);
    const variance = stats.variance(data);
    return gaussian(mean, variance);
}

function sampleNormalDistribution(distribution, value) {
    return distribution.pdf(value);
}


let nOnes = 0;
for(let i =0; i<cleanData.length; i++){
	if(cleanData[i][8]==1){
		nOnes= nOnes+1
	}
}
let probability1 = nOnes/cleanData.length
let probability0 = 1-probability1
// TODO: Build a Bayesian classifier!
let samplesWith1 = new Array()
let samplesWith0 = new Array()
for(let i=0; i<cleanData.length; i++){
	if(cleanData[i][8]==1){
		samplesWith1.push(cleanData[i])
	}else{
		samplesWith0.push(cleanData[i])
	}
}
function findDistribution(samples, conditionNumber){
	let condition = new Array()
	for(let i=0; i<samples.length; i++){
		condition.push(samples[i][conditionNumber])
	}
	return buildNormalDistribution(condition)
}


let distributionsFor1 = new Array()
for(let i =0; i<samplesWith1[0].length-1; i++){
	distributionsFor1.push(findDistribution(samplesWith1, i))}

let distributionsFor0 = new Array()
for(let i =0; i<samplesWith0[0].length -1; i++){
	distributionsFor0.push(findDistribution(samplesWith0,i))
}

// for(let i =0; i<samplesWith1.length; i++){
// 	distributionsFor1.push(findDistribution(samplesWith1, i))
// }

// let distributionsFor0 = new Array()
// for(let i =0; i<samplesWith0.length; i++){
// 	distributionsFor0.push(findDistribution(samplesWith0,i))
// }


function test(sample){
	let likelihood1 = 1;
	let likelihood0 = 1;
	for(let i =0; i<sample.length-1; i++){
		likelihood1 = likelihood1 * sampleNormalDistribution(distributionsFor1[i], sample[i])
		likelihood0 = likelihood0 * sampleNormalDistribution(distributionsFor0[i], sample[i])
	}

	let sampleProbability1 = likelihood1*probability1
	let sampleProbability0 =  likelihood0*probability0
 	if(sampleProbability0>sampleProbability1){
 		return 0
	 }else{
 		return 1;
	 }

}
function testEverything(data){
	let nCorrect = 0;
	
	for(let i=0; i<data.length-1; i++){
		if(test(data[i])==data[i][8]){
			nCorrect=nCorrect+1
		}
	}
	return nCorrect/data.length

}	