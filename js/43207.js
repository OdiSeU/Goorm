//https://level.goorm.io/exam/43207/%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC/quiz/1

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
	let min = 1234567890;
	for(let i = 1; i < arr.length ; i++) {
		min = Math.min(min, arr[i] - arr[i-1]);
	}
	return min;
}