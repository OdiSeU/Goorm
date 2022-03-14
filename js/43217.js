// https://level.goorm.io/exam/43217/space-count/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N;

rl.on("line", function(line) {
	if(!N) {
		N = +line;
		return;
	}
	console.log(solution(line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(s) {
	let tmp = s.match(/ /g);
	return tmp ? tmp.length : 0;
}