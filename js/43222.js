// https://level.goorm.io/exam/43222/%EB%AA%AB%EA%B3%BC-%EB%82%98%EB%A8%B8%EC%A7%80/quiz/1

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
	return [a/b|0, a%b].join(' ');
}