//https://level.goorm.io/exam/43154/%EB%B9%84%ED%8A%B8%EC%97%B0%EC%82%B0-%EA%B8%B0%EB%B3%B8-1/quiz/1

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
	return `${a&b}\n${a|b}\n${a^b}`;
}