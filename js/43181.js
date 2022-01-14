//https://level.goorm.io/exam/43181/%ED%94%BC%EB%9D%BC%EB%AF%B8%EB%93%9C/quiz/1

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
	let result = '';
	for(let i = 1; i <= n; i++) {
		result += ' '.repeat(n - i) + '*'.repeat(i*2-1) + '\n';
	}
	return result;
}