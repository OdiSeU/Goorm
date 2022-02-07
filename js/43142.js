// https://level.goorm.io/exam/43142/%EC%88%AB%EC%9E%90-%EB%92%A4%EC%A7%91%EA%B8%B0/quiz/1

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

function solution(s) {
	return +[...s].reverse().join('');
}