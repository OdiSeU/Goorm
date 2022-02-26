//https://level.goorm.io/exam/43261/%EB%B2%94%EC%9C%84-%EB%82%B4%EC%9D%98-%EC%88%AB%EC%9E%90%EB%A5%BC-%EB%B6%84%ED%95%B4%ED%95%98%EC%97%AC-%EA%B3%B1%ED%95%9C-%ED%9B%84-%ED%95%A9-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

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
	let sum = 0;
	for(let i = a; i <= b; i++) {
		sum += [...`${i}`].reduce((acc, v)=>acc*(+v), 1);
	}
	return sum;
}