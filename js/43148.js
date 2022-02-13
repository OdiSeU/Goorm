//https://level.goorm.io/exam/43148/%ED%8F%89%EA%B7%A0%EA%B3%BC-%ED%8F%89%EA%B7%A0%EB%B3%B4%EB%8B%A4-%ED%81%B0-%EC%88%98/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N;

rl.on("line", function(line) {
	if(!N) {
		N = +line;
		return;
	}
	let arr = line.split(' ').map(v=>+v);
	console.log(solution(arr));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(arr) {
	let avg = arr.reduce((acc, v) => acc + v) / arr.length;
	return avg.toFixed(1) + ' ' + arr.filter(v => v > avg).length;
}