// https://level.goorm.io/exam/43277/%EB%B2%A1%ED%84%B0%EC%9D%98-%EC%97%B0%EC%82%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let x1, y1, x2, y2;

rl.on("line", function(line) {
	if(!x1) {
		[x1, y1] = line.split(' ').map(v=>+v);
		return;
	}
	if(!x2) {
		[x2, y2] = line.split(' ').map(v=>+v);
		return;
	}
	console.log(solution(x1, y1, x2, y2, line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(x1, y1, x2, y2, cmd) {
	const cnvt = s => eval(s).toFixed(2);
	let a = x1 + cmd + x2, b = y1 + cmd + y2;
	return cnvt(a) + ' ' + cnvt(b);
}