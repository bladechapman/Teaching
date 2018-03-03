const fs = require('fs');
const gaussian = require('gaussian');
const stats = require('stats-lite');

const DATA_PATH = './data/diabetes.txt';
const rawData = fs.readFileSync(DATA_PATH, {
    encoding: 'utf8'
});

const lines = rawData.split('\n');
const cleanData = lines.map(line => line.split(',').map(i => parseInt(i)));


function buildNormalDistribution(data) {
    const mean = stats.mean(data);
    const variance = stats.variance(data);
    return gaussian(mean, variance);
}

function sampleNormalDistribution(distribution, value) {
    return distribution.pdf(value);
}



// TODO: Build a Bayesian classifier!
