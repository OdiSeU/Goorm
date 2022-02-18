// https://level.goorm.io/exam/43279/%ED%94%BC%ED%83%80%EA%B3%A0%EB%9D%BC%EC%8A%A4-%EB%AC%B8%EC%A0%9C/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution());
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution() {
	for(let a = 1; a <= 1000; a++) {
		for(let b = 1; a + b <= 1000; b++) {
			let c = Math.sqrt(a*a + b*b);
			if(Number.isInteger(c))
				if(a + b + c === 1000)
					return a * b * c;
		}
	}
	return;
}