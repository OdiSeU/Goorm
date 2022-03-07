//https://level.goorm.io/exam/43182/%EA%B5%AC%EA%B5%AC%EB%8B%A8/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	process.stdout.write(solution(+line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n) {
	let c = 0, answer = '';
	for(let i = 2; i <= 9; i++) {
		for(let j = 1; j <= 9; j++) {
			answer += `${i} * ${j} = ${i*j} `;
			if(++c === n) {
				answer += '\n';
				c = 0;
			}
		}
	}
	return answer;
}