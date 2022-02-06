// https://level.goorm.io/exam/43257/%EB%B6%80%EB%B6%84%EB%AC%B8%EC%9E%90%EC%97%B4/quiz/1

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

function solution(str) {
	let s = '', answer = [];
	for(let i = 0; i < str.length; i++) {
		s += str[i];
		answer.push(s);
	}
	return answer.join('\n');
}