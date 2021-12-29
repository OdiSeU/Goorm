// https://level.goorm.io/exam/43166/3%EA%B3%BC-5%EC%9D%98-%EB%B0%B0%EC%88%98/quiz/1

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
	let sum = 0;
	for(let i = 3; i <= n; i++) {
		if(i%3===0 || i%5===0) sum += i;
	}
	return sum;
}