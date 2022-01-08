// https://level.goorm.io/exam/47882/%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-%EC%9E%91%EB%8C%80%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(line).join('\n'));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(str) {
	let cnts = [0, 0, 0, 0];
	for(let i = 0; i < str.length; i++) {
		switch(str[i]) {
			case '1': cnts[0]++; break;
			case 'I': cnts[1]++; break;
			case 'l': cnts[2]++; break;
			case '|': cnts[3]++; break;
		}
	}
	
	return cnts;
}