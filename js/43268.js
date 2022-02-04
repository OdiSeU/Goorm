//https://level.goorm.io/exam/43268/%EC%A0%84%EA%B8%B0%EC%9A%94%EA%B8%88/quiz/1

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
	if(n < 100) return (n * 0.005).toFixed(2);
	else if(n < 200) return (n * 0.007).toFixed(2);
	else if(n < 300) return (n * 0.009).toFixed(2);
	else return (n * 0.01).toFixed(2);
}