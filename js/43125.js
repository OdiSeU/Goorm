//https://level.goorm.io/exam/43125/%EC%B5%9C%EC%86%8C%EA%B0%92/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let n;
rl.on("line", function(line) {
	if(!n) n = +line;
	else {
		let data = line.split(' ').map(v => +v);
		console.log(solution(data));
		rl.close();
	}
}).on("close", function() {
	process.exit();
});

function solution(arr) {
	return arr.reduce((min, v) => Math.min(min, v), arr[0]);
}