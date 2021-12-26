//https://level.goorm.io/exam/43238/%EC%86%8C%EC%88%98-%ED%8C%90%EB%B3%84/quiz/1
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
	for(let i = 2; i*i <= n; i++)
		if(n % i === 0) return 'False';
	return 'True';
}