// https://level.goorm.io/exam/43245/%EC%B5%9C%EB%8C%93%EA%B0%92/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N;

rl.on("line", function(line) {
	if(!N) {
		N = +line;
		return;
	}
	let arr = line.split(' ').map(v=>+v);
	console.log(solution(arr));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(arr) {
	let num = 0, idx = 0;
	for(let i = 0; i < arr.length; i++) {
		if(num < arr[i]) {
			[num, idx] = [arr[i], i+1];
		}
	}
	return num + ' ' + idx;
}