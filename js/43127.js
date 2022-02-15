//https://level.goorm.io/exam/43127/%ED%99%80%EC%88%98-%EB%86%80%EC%9D%B4/quiz/1

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
	return (n * n * 2 - 3) * 3;
}