// https://level.goorm.io/exam/43196/%EC%84%B8%EB%A1%9C-%EC%88%9C%EC%84%9C-%EC%82%AC%EA%B0%81%ED%98%95/quiz/1

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
	let answer = "";
	for(let i = 0; i < n; i++) {
		for(let j = 0; j < n; j++) {
			answer += (i + 1 + n * j) + ' ';
		}
		answer += '\n';
	}
	return answer;
}