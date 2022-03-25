// https://level.goorm.io/exam/43190/%EC%9D%80%ED%96%89-%EC%98%88%EA%B8%88-%EC%9D%B4%EC%9E%90-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

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
	for(let i = 0; i < c; i++) a *= 1 + (b / 100);
	return a.toFixed(2);
}