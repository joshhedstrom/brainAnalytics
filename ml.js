const wineData = require('./wineData.json')

// console.log(wineData.length)

let wineArray = [];

// for (var i = 1; i < wineData.length; i++) {
// 	let item = 'wine' + i;
// 	// console.log(item)
// 	// wineArray.push(item);
// }

for (let i = 1; i < wineData.length; i++) {

	// let name = 'wine' + i;

	let wine = new InputDataItem(wineData[i].fixedAcidity, wineData[i].volatileAcidity, wineData[i].citricAcid, wineData[i].residualSugar, wineData[i].chlorides, wineData[i].freeSulfurDioxide, wineData[i].totalSulfurDioxide, wineData[i].density, wineData[i].pH, wineData[i].sulphates, wineData[i].alcohol, wineData[i].quality)
	// console.log(name)	
	wineArray.push(wine);
	// console.log(wineArray)
}
 // {
 //    "fixedAcidity": 7.4,
 //    "volatileAcidity": 0.7,
 //    "citricAcid": 0,
 //    "residualSugar": 1.9,
 //    "chlorides": 0.076,
 //    "freeSulfurDioxide": 11,
 //    "totalSulfurDioxide": 34,
 //    "density": 0.9978,
 //    "pH": 3.51,
 //    "sulphates": 0.56,
 //    "alcohol": 9.4,
 //    "quality": 5
 //  },


function InputDataItem (fa, va, ca, rs, ch, fsd, tsd, den, ph, su, al, qual) {
	input: {
	this.fa = fa;
	this.va = va;
	this.ca = ca;
	this.rs = rs;
	this.ch = ch;
	this.fsd = fsd;
	this.tsd = tsd;
	this.den = den;
	this.ph = ph;
	this.su = su;
	this.al = al;
	}
	output: {
		this.qual = qual;
	}
}

// console.log(wineArray.length)
console.log(wineArray)


// const brain = require('brain.js')

// let net = new brain.NeuralNetwork();

// // const trainingData = [
// // 		   {input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
// //            {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
// //            {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}
// //           ]

// net.train(trainingData, {log: true});

// let output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }
// console.log(output)