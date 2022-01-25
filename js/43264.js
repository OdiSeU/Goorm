// https://level.goorm.io/exam/43264/n-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

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
	return Math.ceil((Math.sqrt(8 * n + 1) - 1) / 2);
}