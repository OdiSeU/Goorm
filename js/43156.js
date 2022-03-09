// https://level.goorm.io/exam/43156/%ED%94%BC%EC%9E%90-%EC%BF%A0%ED%8F%B0/quiz/1

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
	let ans = a, svc;
	while(a > b) {
		svc = a / b | 0;
		ans += svc;
		a = svc + (a % b);
	}
	
	return ans;
}