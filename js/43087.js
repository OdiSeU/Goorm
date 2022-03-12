// https://level.goorm.io/exam/43087/%EC%84%B8%EB%A1%9C-%EC%9D%BD%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, n, arr = [];

rl.on("line", function(line) {
	if(!N) {
		n = N = +line;
		return;
	}
	arr.push(line.split(' '));
	if(--n) return;
	console.log(solution(N, arr));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(N, arr) {
	let ans = '';
	for(let c = N-1; c >= 0; c--) {
		for(let r = 0; r < N; r++) {
			ans += arr[r][c];
		}
	}
	return ans;
}