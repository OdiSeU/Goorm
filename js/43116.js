//https://level.goorm.io/exam/43116/%EC%99%84%EC%A0%84-%EC%A0%9C%EA%B3%B1%EC%88%98/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b] = line.split(' ').map(v=>+v);
	console.log(solution(a, b));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b) {
	let c = Math.ceil(Math.sqrt(a)), sum = 0;
	for(let i = c; i*i <= b; i++) {
		sum += i*i;
	}
	return c*c + ' ' + sum;
}