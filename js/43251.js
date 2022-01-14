// https://level.goorm.io/exam/43251/%EC%82%BC%EA%B0%81%ED%98%95%EC%9D%98-%EB%84%93%EC%9D%B4/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b] = line.split(' ').map(v=>+v);
	console.log(solution(a, b));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b) {
	return (a*b/2).toFixed(1);
}