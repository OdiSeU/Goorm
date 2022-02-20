// https://level.goorm.io/exam/43265/selection-sort/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let n, s;

rl.on("line", function(line) {
	if(!n) {
		[n, s] = line.split(' ').map(v=>+v);
		return;
	}
	let arr = line.split(' ').map(v=>+v);
	console.log(solution(n, s, arr));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n, s, arr) {
	for(let i = 0; i < s; i++) {
		let idx = i, min = arr[i];
		for(let j = i+1; j < arr.length; j++) {
			if(min > arr[j]) {
				min = arr[j];
				idx = j;
			}
		}
		[arr[i], arr[idx]] = [arr[idx], arr[i]];
	}
	
	return arr.join(' ') + ' ';
}