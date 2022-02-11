// https://level.goorm.io/exam/43191/%EC%9E%AC%EC%A0%95-%EC%9C%84%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b, c] = line.split(' ').map(v=>+v);
	console.log(solution(a,b,c));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b, c) {
	return [a, b, c].sort((a,b)=>a-b)[1];
}