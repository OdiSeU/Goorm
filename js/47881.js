// https://level.goorm.io/exam/47881/%EA%B7%BC%EB%AC%B5%EC%9E%90%ED%9D%91/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, K;

rl.on("line", function(line) {
	if(!N) {
		[N, K] = line.split(' ').map(v=>+v);
		return;
	}
	console.log(solution(N, K));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(N, K) {
	return Math.ceil((N - K) / (K - 1)) + 1;
}