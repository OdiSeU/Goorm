//https://level.goorm.io/exam/43273/min-%ED%95%A8%EC%88%98/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(line);
	rl.close();
}).on("close", function() {
	process.exit();
});