//https://level.goorm.io/exam/43228/%EB%91%90-%EC%A0%90-%EC%82%AC%EC%9D%B4%EC%9D%98-%EA%B1%B0%EB%A6%AC/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let x1, y1, x2, y2;
rl.on("line", function(line) {
	if(x1 === undefined) {
		[x1, y1] = line.split(' ').map(v=>+v);
		return;
	}
	[x2, y2] = line.split(' ').map(v=>+v);
	console.log(solution(x1, y1, x2, y2));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2)).toFixed(2);
}