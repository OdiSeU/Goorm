// https://level.goorm.io/exam/43157/%EC%A3%BC%EC%82%AC%EC%9C%84-%EB%86%80%EC%9D%B4/quiz/1

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
	let answer = [];
	for(let i = 1; i <= 6; i++) {
		if(1 <= n - i && n - i <= 6)
			answer.push(i + ' ' + (n - i));
	}
	return answer.join('\n');
}