// https://level.goorm.io/exam/43083/%EA%B3%84%EB%8B%A8-%EC%98%A4%EB%A5%B4%EA%B8%B0/quiz/1

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
	let a = 1, b = 2;
	if(n === 1) return a;
	if(n === 2) return b;
	for(let i = 3; i <= n; i++) [a, b] = [b, a + b];
	return b;
}