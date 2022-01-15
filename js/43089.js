// https://level.goorm.io/exam/43089/%ED%8A%B9%EC%A0%95-%EB%AC%B8%EC%9E%90-%EA%B0%9C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let str = '';

rl.on("line", function(line) {
	if(!str) {
		str = line;
		return;
	}
	console.log(solution(str, line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(str, c) {
	let cnt = str.match(RegExp(c, 'g'));
	return cnt ? cnt.length : 0;
}