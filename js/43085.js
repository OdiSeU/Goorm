// https://level.goorm.io/exam/43085/insertion-sort/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, arr, idx;

rl.on("line", function(line) {
	if(!N) {
		N = line;
		return;
	}
	if(!arr) {
		arr = line.split(' ');
		return;
	}
	console.log(solution(arr, line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(arr, idx) {
	for(let i = 1; i <= idx; i++) {
		let j = i, x = arr[i];
		while(--j >= 0 && x < arr[j]) arr[j+1] = arr[j];
		arr[j+1] = x;
	}
	return arr.join(' ') + ' ';
}