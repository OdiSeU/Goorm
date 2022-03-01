// https://level.goorm.io/exam/43202/%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C/quiz/1

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
	let head = [], tail;
	for(let i = 0; i < (n+1)/2|0; i++)
		head.push(' '.repeat((n / 2) - i) + '*'.repeat(2 * i + 1));
	tail = head.slice(0, -1).reverse();
	if(n%2===0) head.pop();
	return head.concat(tail).join('\n');
}