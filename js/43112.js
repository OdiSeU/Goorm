// https://level.goorm.io/exam/43112/%EB%84%A4-%EC%88%98%EC%9D%98-%EA%B3%B1/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b, c, d] = line.split(' ').map(v=>+v);
	console.log(solution(a, b, c, d));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b, c, d) {
	let mul = (a, b) => a * b;
	return mul(mul(a, b), mul(c, d));
}