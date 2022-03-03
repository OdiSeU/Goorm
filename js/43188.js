// https://level.goorm.io/exam/43188/%EC%9D%B4%EC%B0%A8-%EB%B0%A9%EC%A0%95%EC%8B%9D%EC%9D%98-%ED%95%B4/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [a, b, c] = line.split(' ').map(v=>+v);
	console.log(solution(a, b, c));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(a, b, c) {
	let D = b*b - 4*a*c;
	if(D < 0) return 'X';
	let x1 = (-b + Math.sqrt(D)) / (2 * a);
	let x2 = (-b - Math.sqrt(D)) / (2 * a);
	if(D === 0) return x1.toFixed(2);
	else return x1.toFixed(2) + ', ' +  x2.toFixed(2);
}