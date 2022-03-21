// https://level.goorm.io/exam/43104/%EB%B6%84%ED%95%B4%ED%95%A9/quiz/1

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

function solution(N) {
	for(let i = +N - N.length * 9; i <= N; i++)
		if(i + [...`${i}`].reduce((acc, v)=>acc+(v|0), 0) === +N) return i;
	return 0;
}