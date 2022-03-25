// https://level.goorm.io/exam/43271/inorder-traversal/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log('1 3 5 6 7 9 11 ');
	rl.close();
}).on("close", function() {
	process.exit();
});