// https://level.goorm.io/exam/43243/bubble-sort/quiz/1

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
	let arr = line.split(' ').map(v=>v);
	console.log(solution(arr));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(arr) {
	return arr.sort((a,b)=>a-b).join(' ')+' ';
}