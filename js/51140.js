// https://level.goorm.io/exam/51140/%EA%B0%9C%EA%B5%AC%EB%A6%AC-%EC%86%8C%ED%83%95/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(S) {
	let idx = S.indexOf('frog');
	while(idx >= 0) {
		S = S.slice(0, idx) + S.slice(idx+4);
		idx = S.indexOf('frog');
	}
	
	return S.length ? S : 'all kill';
}