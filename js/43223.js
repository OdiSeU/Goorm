// https://level.goorm.io/exam/43223/%ED%95%98%EB%85%B8%EC%9D%B4%EC%9D%98-%ED%83%91/quiz/1

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
	return Math.pow(2,n)-1;
}