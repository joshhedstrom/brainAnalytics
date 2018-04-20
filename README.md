# brainAnalytics

This is a proof of concept / demonstration of how to use brain.js using inputs and outputs, with the example of a data set on the factors of wine quality.

The goal of this is to demonstrate how to use the brain.js library so that you can apply it to your own projects. Machine Learning is a lot of fun, and if you just have a basic understanding of Javascript and Node.js, you should be able to do this. Basically what is happening is the library analyzes a data set (the chemical properties of a given wine in this instance) that includes an output: in this case the quality of the wine (I don't know who decided the level of quality in the data set originally). We train the algorithm against that dataset, and then we give it a test set of variables: a wine and it's chemical composition. The test set doesn't include the quality, because that is what we are trying to find out. After the algorithm is trained, it gives a prediction on the wine quality, based off the data set.

It's real world usefullness is limited, unless you happen to know the chemical content of whatever wine you're drinking. ;)

This is just one test case of infinite possibilites. Once you've used it, modify it however you like to fit your own project. This library will analyze anything, given you have the same number of variables in an input, and given that you're asking for the same output. You could easily take out factors and it would still work. You could analyze a wine based on it's Citric Acid, Residual Chlorides, and pH levels to try to figure out if you could predict the level of sulphates in any given wine. 

Obviously some models make sense and others don't. Just because you can throw an algorithm against it doesn't mean it's accurate...it's only accurate to the level of it's training data. I think this data set is based off of red wines from one area of Portugal. I don't think that will help much with French white wines, but I'm not a wine expert. 

Mess around with it and see what you can come up with. 

### Prerequisites

To start off with, you'll need to make sure you have Node.js installed on your computer. If you don't, head to the [Node](https://nodejs.org/en/download/) install page and download it with the default settings.

### Installing

Once you have node set up, navigate in the terminal to your intended folder and then download or clone this repo to that folder. Then, install the packages in the terminal.

```
npm install
```

Once the dependencies are installed, you can run the file from the command line.

But first, take a moment to look through the ml.js file. The training data is in line 2. If you open up the wineData.json file, you'll see a data set about wines courtesy of UCI. Line 30 trains the algorithm against the training data. Line 32 then runs an input against the algorithm and outputs the result. 

To run the program, type this is in the command line:

```
node ml.js
```

You will probably see something like this.

```
iterations: 10, training error: 0.00575403822153868
iterations: 20, training error: 0.0053594761545421345
iterations: 30, training error: 0.004979650195636551
{ qual: 0.4271785616874695 }
```

iterations is how many times it iterated through the data, and what the margin of error was at the end. The default parameters is that it will run until the margin of error is less than 0.005, or until 20,000 iterations. 

If you switch the input and the output, so change line 9 to:
```
output: {
```
and change line 23 to:
```
input: {
```
and change the input for the result in lines 32-45 to:
```
let result = net.run({
	// fa: 0.74,
	// va: 0.07,
	// ca: 0,
	// rs: 0.19,
	// ch: 0.0076,
	// fsd: 0.11,
	// tsd: 0.34,
	// den: 0.09978,
	// ph: 0.351,
	// su: 0.056,
	// al: 0.4,
	qual: 0.9
});
```

It will run through the 20k iterations. In theory, at the end, it will tell you what factos go into a wine with a quality of 0.9. It will probably look something like this:
```
iterations: 20000, training error: 0.015436195679448003
{ fa: 0.8056249022483826,
  va: 0.026692241430282593,
  ca: 0.07229070365428925,
  rs: 0.3061937093734741,
  ch: 0.005311837885528803,
  fsd: 0.14233212172985077,
  tsd: 0.3848642110824585,
  den: 0.09931984543800354,
  ph: 0.33168554306030273,
  su: 0.08166047930717468,
  al: 0.9999994039535522 }
```
I'm not really a wine expert, and I know there are more factors than this just, but this is a demonstration of a proof of concept.

Mess around with the file and see what happens! What changes when you take away half the data set? 3/4 of the data set? What happens when you change the input? What parts of the ml.js code are you not farmiliar with? The best way to learn is by breaking something and fixing it! Google is our friend!

I hope this is a helpful demonstration and gives you a framework to mess around in and start discovering the incredible world of machine learning. If you have any questions or corrections let me know.

## Built With

* [Node.js](https://nodejs.org/)
* [Brain.js](https://github.com/BrainJS/brain.js) - Open Source Machine Learning Javascript Library
* [UCI Machine Learning Repository Data Sets](https://archive.ics.uci.edu/ml/datasets/wine+quality) - Data set used to train model


## Author

* **Josh Hedstrom** - [jhedstrom.com](https://jhedstrom.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
