// https://level.goorm.io/exam/43118/1%EC%9D%98-%EA%B0%9C%EC%88%98/quiz/1

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
	const count = (n) => {
		let tmp = n.toString(2).match(/1/g);
		return tmp ? tmp.length : 0;
	}
	
	return count(n) + ' ' + count(`0x${n}`-0);
}