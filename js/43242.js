// https://level.goorm.io/exam/43242/%EA%B1%B0%EC%8A%A4%EB%A6%84%EB%8F%88/quiz/1

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
	let change = 1000 - n;
	let answer = [0,0,0,0];
	answer[0] = change / 500 | 0;
	change %= 500;
	answer[1] = change / 100 | 0;
	change %= 100;
	answer[2] = change / 50 | 0;
	change %= 50;
	answer[3] = change / 10 | 0;
	change %= 10;
	
	return answer.join(' ') + ' ';
}