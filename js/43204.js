//https://level.goorm.io/exam/43204/%EC%9C%A4%EB%85%84-leap-year/quiz/1

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
	return (n%4 || !(n%100) && n%400) ? 'Not Leap Year' : 'Leap Year';
}