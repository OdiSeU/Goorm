// https://level.goorm.io/exam/43092/%EB%A6%AC%EA%B7%B8-%EA%B2%BD%EA%B8%B0-%ED%9A%9F%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

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
	return n * (n - 1) / 2;
}