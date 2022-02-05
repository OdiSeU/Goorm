//https://level.goorm.io/exam/43088/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%88%98%EC%97%B4/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(+line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n) {
	let a = 1, b = 1;
	if(n == 1) return 1;
	for(let i = 3; i < n+3; i++) {
		[a, b] = [b, a+b];
	}
	return b-1;
}