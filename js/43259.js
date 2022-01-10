//https://level.goorm.io/exam/43259/%EA%B3%B5%EB%B0%B1-%EC%97%86%EC%95%A0%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(s) {
	return s.replace(/ /g, '');
}