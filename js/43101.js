//https://level.goorm.io/exam/43101/%EB%AA%A8%EC%96%91%EC%B0%8D%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	process.stdout.write(solution(+line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n) {
	let result = '';
	for(let i = n; i > 0; i--) {
		result += '*'.repeat(i) + '\n';
	}
	return result;
}