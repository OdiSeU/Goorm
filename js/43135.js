// https://level.goorm.io/exam/43135/3%EC%9D%98-%EB%B0%B0%EC%88%98-%EA%B2%8C%EC%9E%84/quiz/1

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
	let result = '';
	for(let i = 1; i <= n; i++) {
		let x = i % 3 ? i : 'X';
		result += x + ' ';
	}
	return result;
}