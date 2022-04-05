// https://level.goorm.io/exam/43075/1a-%EC%9E%90%EB%8F%99%EB%AC%B8/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let T;

rl.on("line", function(line) {
	if(!T) {
		T = +line;
		return;
	}
	let [L, a, v] = line.split(' ').map(v=>+v);
	console.log(solution(L, a, v));
	if(!(--T)) rl.close();
}).on("close", function() {
	process.exit();
});

function solution(L, a, v) {
	return (Math.sqrt(2*L/a) * v).toFixed(2);
}