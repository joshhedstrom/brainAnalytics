const brain = require('brain.js')
const wineData = require('./wineData.json')
let net = new brain.NeuralNetwork();
let wineArray = [];

for (let i = 1; i < wineData.length; i++) {

	wineArray.push({
		input: {
			fa: wineData[i].fixedAcidity / 10,
			va: wineData[i].volatileAcidity / 10,
			ca: wineData[i].citricAcid / 10,
			rs: wineData[i].residualSugar / 10,
			ch: wineData[i].chlorides / 10,
			fsd: wineData[i].freeSulfurDioxide / 100,
			tsd: wineData[i].totalSulfurDioxide / 100,
			den: wineData[i].density / 10,
			ph: wineData[i].pH / 10,
			su: wineData[i].sulphates / 10,
			al: wineData[i].alcohol / 10,

		},
		output: {
			qual: wineData[i].quality / 10,
			
		}
	})
}

net.train(wineArray, {log: true});

let result = net.run({
	fa: 0.74,
	va: 0.07,
	ca: 0,
	rs: 0.19,
	ch: 0.0076,
	fsd: 0.11,
	tsd: 0.34,
	den: 0.09978,
	ph: 0.351,
	su: 0.056,
	al: 0.94,
});

console.log(result)