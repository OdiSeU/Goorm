// https://level.goorm.io/exam/43117/%EC%A0%88%EB%8C%80%EA%B0%92/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(+line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n) {
	return Math.abs(n);
}