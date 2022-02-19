// https://level.goorm.io/exam/43168/%EC%95%94%ED%98%B8%EC%9D%98-%EA%B0%9C%EC%88%98/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b, n] = line.split(' ').map(v=>+v);
	console.log(solution(a, b, n));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b, n) {
	let sum = 0;
	for(let i = a; i <= b; i++) sum += Math.pow(n, i);
	return sum;
}