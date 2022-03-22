// https://level.goorm.io/exam/43212/%EC%9B%90%EC%A3%BC%EC%9C%A8-n%EB%B2%88%EC%A7%B8-%EC%9E%90%EB%A6%AC/quiz/1

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
	return '3.14159265358979323846'.slice(0, n+2);
}