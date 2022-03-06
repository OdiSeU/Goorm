// https://level.goorm.io/exam/43134/%EC%A0%95%EC%9C%A1%EA%B0%81%ED%98%95%EC%9D%98-%EB%84%93%EC%9D%B4/quiz/1

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
	return (3 * n * n * Math.sqrt(3) / 2).toFixed(2);
}