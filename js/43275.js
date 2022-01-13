//https://level.goorm.io/exam/43275/%EC%99%84%EC%A0%84%EC%88%98/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [A, B] = line.split(' ').map(v=>+v);
	console.log(solution(A, B));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(A, B) {
	return [6, 28, 496, 8128].filter(v => A <= v && v <= B).join(' ') + ' ';
}