// https://level.goorm.io/exam/43231/%EB%A9%80%ED%8B%B0%ED%83%AD-%EC%82%AC%EC%9A%A9/quiz/1

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
	return arr.reduce((acc, v)=>acc+v) - arr.length + 1;
}