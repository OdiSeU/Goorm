//https://level.goorm.io/exam/43232/%EC%95%BD%EC%88%98%EC%9D%98-%ED%95%A9/quiz/1

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
	let i, sum = 0;
	for(i = 1; i*i < n; i++) {
		if(n % i === 0) sum += i + n/i;
	}
	if(i*i === n) sum += i;
	return sum;
}