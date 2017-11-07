// Do not worry about code in this section, it is internal
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";
var testcaseIndex;
process.stdin.on('data', function(text) {
	input += text;
});
// Do not change code above! It cause test failed

// You must work just only in following section:

function SuperArray() {
	this.innerArray = [];
	this.put = function(a) {
		if (!this.innerArray.includes(a)) {
			if (a < this.innerArray[0]) {
				this.innerArray.splice(0, 0, a);
			} else {
				if (this.innerArray.length > a) {
					this.innerArray.splice(a, 0, a);
				} else {
					this.innerArray.splice(a - 2, 0, a);
				}
			}
		}
	};
	this.pop = function() {
		if (this.innerArray[0]) {
			let removedArray = this.innerArray[0];
			this.innerArray.splice(0, 1);
			return removedArray;
		}
	};
	this.putArray = function(sa2) {
		for (var i = sa2.length - 1; i >= 0; i--) {
			this.put(sa2[i]);
		}
	};
	this.print = function() {
		let allElements = '';
		for (var i = 0; i <= this.innerArray.length; i++) {
			if (this.innerArray[i]) {
				allElements += this.innerArray[i] + ",";
			}
		}
		return allElements.slice(0, -1);
	};
	this.fill = function(n, k) {
		let reg = new RegExp(k);
		this.innerArray = [];
		for (var i = 0; i <= n; i++) {
			if (!reg.test(i)) {
				this.innerArray.push(i);
			}
		}
	};
}

var superArray = new SuperArray();
var superArray2 = new SuperArray();

function parseInput(input) {
	superArray.innerArray = input[1];
	superArray2.innerArray = input[2];
}

// Do not worry about code in this section, it is internal
// Do not change code below! It cause test failed
process.stdin.on('end', function() {
	var inputParsed = input.split(' ');
	var testcaseIndex = parseInt(inputParsed.shift());
	parseInput(inputParsed);

	switch (testcaseIndex) {
		case 1:
			break;
		case 2:
			superArray.put(15);
			var pop = superArray.pop();
			superArray2.put(pop);
			break;
		case 3:
			var n = superArray.pop();
			var k = superArray2.pop();
			superArray2.fill(n, k);
			break;
		case 4:
			superArray.putArray(superArray2);
			break;
		case 5:
			superArray.put(15);
			break;
		case 6:
			superArray.pop();
			break;
		case 7:
			superArray.fill(30, 2);
			break;
	}
	console.log(superArray.print());
	console.log(superArray2.print());
});