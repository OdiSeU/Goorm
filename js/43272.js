// https://level.goorm.io/exam/43272/%ED%8C%8C%EB%8F%84%EB%B0%98-%EC%88%98%EC%97%B4/quiz/1

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
	let memoi = [1,1,1,2,2];
	for(let i = 5; i < n; i++) memoi.push(memoi[i-1] + memoi[i-5]);
	return memoi[n-1];
}