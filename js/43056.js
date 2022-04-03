// https://level.goorm.io/exam/43056/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let arr = line.split(' ').map(v=>+v);
	console.log(solution(arr));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(arr) {
	let cnts = arr.reduce((acc, v) => { acc[v-1]++; return acc; }, [0, 0, 0]);
	let cnt0 = cnts.reduce((acc, v) => v ? acc : acc+1, 0);
	if(cnt0 === 0 || cnt0 === 2) return 0;
	if(cnts[0] === 0) return cnts[2];
	if(cnts[1] === 0) return cnts[0];
	if(cnts[2] === 0) return cnts[1];
}