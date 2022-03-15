// https://level.goorm.io/exam/43146/2%EC%B0%A8%EC%9B%90-%EA%B5%AC%EA%B0%84%ED%95%A9/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let T, arr = [];

rl.on("line", function(line) {
	if(T === undefined) {
		T = +line;
		return;
	}
	if(T--) {
		arr.push(line.split(' ').map(v=>+v));
		return;
	}
	let [r1, c1, r2, c2] = line.split(' ').map(v=>+v);
	console.log(solution(arr, r1, c1, r2, c2));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(arr, r1, c1, r2, c2) {
	let ans = 0;
	for(let r = r1; r <= r2; r++) {
		for(let c = c1; c <= c2; c++) {
			ans += arr[r][c];
		}
	}
	
	return ans;
}