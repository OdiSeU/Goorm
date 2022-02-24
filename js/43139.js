// https://level.goorm.io/exam/43139/3%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution());
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution() {
	return `1 2 3 
4 5 6 
7 8 9 

10 11 12 
13 14 15 
16 17 18 

19 20 21 
22 23 24 
25 26 27 
`;
}