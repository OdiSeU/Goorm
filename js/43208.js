// https://level.goorm.io/exam/43208/ascii-%EC%BD%94%EB%93%9C/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(line) {
	return line.charCodeAt();
}