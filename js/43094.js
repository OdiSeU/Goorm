// https://level.goorm.io/exam/43094/%EC%8B%9C%ED%97%98%EC%84%B1%EC%A0%81-%ED%8F%89%EA%B7%A0%EA%B3%BC-%EB%93%B1%EA%B8%89-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let scores = line.split(' ').map(v => +v);
	console.log(solution(scores).join(' '));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(scores) {
	let grades = ['F','F','F','F','F','F','D','C','B','A','A'];
	let sum = scores.reduce((sum, v) => sum + v);
	let avg = Math.round(sum / scores.length * 100) / 100;
	let grade = grades[avg / 10 | 0];
	
	return [avg.toFixed(2), grade];
}