// https://level.goorm.io/exam/43192/factorial-%EA%B3%84%EC%8A%B9/quiz/1

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
	return n > 1 ? solution(n - 1) * n : 1;
}