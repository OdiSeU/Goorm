// https://level.goorm.io/exam/43233/%EA%B1%B0%EA%BE%B8%EB%A1%9C-%ED%95%B4%EB%8F%84-%EC%9D%B4%ED%9A%A8%EB%A6%AC-palindrome/quiz/1

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

function solution(str) {
	return str === [...str].reverse().join('') ? 'Palindrome' : 'Not Palindrome';
}