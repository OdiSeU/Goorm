//https://level.goorm.io/exam/60331/%EB%B9%99%EA%B8%80%EB%B9%99%EA%B8%80-1/quiz/1
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(+line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n) {
	let arr = Array.from(Array(n), ()=>Array(n).fill(' '));
	let cnt = n - 1, r = 0, c = n - 1, x = 1;
	arr[0] = Array(n).fill('#');
	while(cnt) {
		for(let i = 0; i < cnt; i++) arr[r+=x][c] = '#';
		for(let i = 0; i < cnt; i++) arr[r][c-=x] = '#';
		cnt -= 2;
		x = -x;
	}
	return arr.map(v=>v.join(' ')).join(' \n');
}