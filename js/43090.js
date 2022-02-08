//https://level.goorm.io/exam/43090/%EB%8C%80%EC%86%8C%EB%AC%B8%EC%9E%90-%EB%B0%94%EA%BE%B8%EC%96%B4-%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0/quiz/1

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
	let answer = '';
	for(let i = 0; i < s.length; i++) {
		if('a'<= s[i] && s[i] <= 'z') answer += s[i].toUpperCase();
		else answer += s[i].toLowerCase();
	}
	return answer;
}