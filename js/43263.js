//https://level.goorm.io/exam/43263/%ED%8A%B9%EC%A0%95-%EA%B5%AC%EA%B0%84%EC%9D%98-%ED%95%A9/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, arr;

rl.on("line", function(line) {
	if(!N) {
		N = +line;
		return;
	}
	if(!arr) {
		arr = line.split(' ').map(v=>+v);
		return;
	}
	let [a, b] = line.split(' ').map(v=>+v);
	console.log(solution(arr, a, b));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(arr, a, b) {
	let sum = 0;
	for(let i = a-1; i < b; i++) sum += arr[i];
	return sum;
}