// https://level.goorm.io/exam/43096/%EC%86%8C%EC%88%98%EC%9D%98-%EA%B0%9C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

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

function getPrimeSeive(max) {
	let seive = Array(max+1).fill(true);
	seive[0] = seive[1] = false;
	for(let i = 2; i * i <= max; i++) {
		if(!seive[i]) continue;
		for(let j = i * i; j <= max; j+=i) seive[j] = false;
	}
	return seive;
}

function solution(n) {
	return getPrimeSeive(n).reduce((acc, v)=>acc + (v||0), 0);
}