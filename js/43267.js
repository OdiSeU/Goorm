// https://level.goorm.io/exam/43267/hello-goorm/quiz/1

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
	return 'Hello Goorm !' + '\nHello Goorm !'.repeat(n-1);
}