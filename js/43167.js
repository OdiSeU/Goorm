// https://level.goorm.io/exam/43167/%EB%93%B1%EC%B0%A8-%EB%98%90%EB%8A%94-%EB%93%B1%EB%B9%84-%EC%88%98%EC%97%B4/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b, c, d] = line.split(' ').map(v => +v);
	console.log(solution(a, b, c, d));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b, c, d) {
	return b - a === c - b ? 2 * d - c : d * d / c;
}