// https://level.goorm.io/exam/43250/%EB%B0%B0%EC%97%B4-%ED%95%A9%EC%B9%98%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, A, B;

rl.on("line", function(line) {
	if(!N) {
		N = line;
		return;
	}
	if(!A) {
		A = line.split(' ').map(v=>+v);
		return;
	}
	if(!B) {
		B = line.split(' ').map(v=>+v);
	}
	console.log(solution(A, B));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(A, B) {
	let C = [], i = 0, j = 0;
	while(i < A.length && j < B.length) {
		if(A[i] < B[j]) C.push(A[i++]);
		else C.push(B[j++]);
	}
	while(i < A.length) C.push(A[i++]);
	while(j < B.length) C.push(B[j++]);
	
	return C.join(' ') + ' ';
}