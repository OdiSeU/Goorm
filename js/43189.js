// https://level.goorm.io/exam/43189/%EC%A0%88%EC%95%BD-%EC%A0%95%EC%8B%A0%EC%9D%B4-%EB%9B%B0%EC%96%B4%EB%82%9C-%EA%B2%BD%EB%B9%84%EC%9B%90/quiz/1
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
	return Number.isInteger(Math.sqrt(n)) ? 'yes' : 'no';
}