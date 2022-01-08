// https://level.goorm.io/exam/47883/%EB%8B%A8%EC%96%B4%EC%9D%98-%EA%B0%9C%EC%88%98-%EC%84%B8%EA%B8%B0/quiz/1

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
	let cnt = 0, check = 0;
	for(let i = 0; i < str.length; i++) {
		if(!check && str[i] !== ' ') {
			check = 1;
			cnt++;
		}
		if(str[i] === ' ') check = 0;
	}
	
	return cnt;
}