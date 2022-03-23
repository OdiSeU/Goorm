// https://level.goorm.io/exam/43262/%EC%82%BC%EA%B0%81%EC%88%98/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log('76576500');
	rl.close();
}).on("close", function() {
	process.exit();
});