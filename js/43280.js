// https://level.goorm.io/exam/43280/%EC%B1%84%EC%A0%90%ED%95%98%EA%B8%B0/quiz/1

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
	let sum = 0, score = 1;
	for(let i = 0; i < s.length; i++) {
		if(s[i] === 'o') sum += score++;
		else score = 1;
	}
	
	return sum;
}