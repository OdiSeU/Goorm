// https://level.goorm.io/exam/43161/n%EC%A7%84%EB%B2%95/quiz/1

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
	return a.toString(b).toUpperCase();
}