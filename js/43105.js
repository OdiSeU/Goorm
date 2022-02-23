// https://level.goorm.io/exam/43105/%EC%86%8C%EC%9D%B8%EC%88%98-%EB%B6%84%ED%95%B4/quiz/1

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
	let ans = [];
	for(let i = 2; i <= n; i++) {
		while(n%i === 0) {
			ans.push(i);
			n /= i;
		}
	}
	return ans.join(' ');
}