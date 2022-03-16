// https://level.goorm.io/exam/43155/%EC%9D%B4%ED%95%AD-%EA%B3%84%EC%88%98-binomial-coefficient/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [n, k] = line.split(' ').map(v=>+v);
	console.log(solution(n, k));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n, k) {
	let a = 1, b = 1;
	for(let i = n-k+1; i <= n; i++) a *= i;
	for(let i = 1; i <= k; i++) b *= i;
	return a / b;
}