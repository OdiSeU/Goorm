// https://level.goorm.io/exam/43178/%EC%88%AB%EC%9E%90%EC%B6%9C%EB%A0%A5/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution());
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution() {
	return `00000001
00000012
00000123
00001234
00012345`;
}