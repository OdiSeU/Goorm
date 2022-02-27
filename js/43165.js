// https://level.goorm.io/exam/43165/%ED%83%80%EC%9D%BC-%EC%B1%84%EC%9A%B0%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [n, m] = line.split(' ').map(v=>+v);
	console.log(solution(n, m));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n, m) {
	let a = 1, b = 3;
	if(n === 1) return a % m;
	if(n === 2) return b % m;
	for(let i = 3; i <= n; i++) {
		[a, b] = [b, (a*2 + b) % m];
	}
	return b;
}