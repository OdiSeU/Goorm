// https://level.goorm.io/exam/43111/%ED%99%80%EC%A7%9D-%ED%8C%90%EB%B3%84/quiz/1

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
	return n % 2 ? 'odd' : 'even';
}