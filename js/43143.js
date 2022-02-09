//https://level.goorm.io/exam/43143/%EC%82%BC%EA%B0%81%ED%98%95%EC%9D%98-%EB%84%93%EC%9D%B4-2/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b, c] = line.split(' ').map(v=>+v);
	console.log(solution(a, b, c));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b, c) {
	let s = (a + b + c) / 2;
	let ans = Math.sqrt(s * (s - a) * (s - b) * (s - c));
	return ans.toFixed(2);
}