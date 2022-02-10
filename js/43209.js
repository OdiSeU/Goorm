//https://level.goorm.io/exam/43209/%EC%95%94%EC%8A%A4%ED%8A%B8%EB%A1%B1-%EC%88%98-narcissistic-number/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b] = line.split(' ').map(v=>+v);
	console.log(solution(a, b));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b) {
	let arr = [];
	for(let i = a; i <= b; i++) {
		let n = [...`${i}`].reduce((acc, v) =>acc + v*v*v, 0);
		if(i === n) arr.push(n);
	}
	
	return arr.join(' ') + ' ';
}