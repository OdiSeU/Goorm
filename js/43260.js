// https://level.goorm.io/exam/43260/2%EA%B0%9C%EC%9D%98-%EA%B3%84%EB%9E%80/quiz/1

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
	return Math.ceil((Math.sqrt(8*n+1)-1)/2);
}