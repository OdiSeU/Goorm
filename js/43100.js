// https://level.goorm.io/exam/43100/2%EC%A7%84%EC%88%98%EC%9D%98-1-%EA%B0%9C%EC%88%98/quiz/1

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
	let cnt = n.toString(2).match(/1/g);
	return cnt ? cnt.length : 0;
}