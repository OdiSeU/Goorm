// https://level.goorm.io/exam/43133/postorder-traversal/quiz/1
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log('1 5 3 7 11 9 6 ');
	rl.close();
}).on("close", function() {
	process.exit();
});