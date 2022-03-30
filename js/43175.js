// https://level.goorm.io/exam/43175/%EB%B0%98%EB%B3%B5%EB%90%98%EB%8A%94-%EC%88%AB%EC%9E%90%EA%B0%80-%EC%97%86%EB%8A%94-%EC%88%98/quiz/1

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
	const check = (n) => {
		let s = `${n}`, a = Array(10).fill(0);
		for(let i = 0; i < s.length; i++) {
			if(a[+s[i]]) return 1;
			else a[+s[i]] = 1;
		}
		return 0;
	}
	let x = 1;
	for(let i = 0; i < n; i++)
		while(check(++x));
	return x-1;
}