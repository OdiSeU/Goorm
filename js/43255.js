//https://level.goorm.io/exam/43255/%EC%95%BD%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(+line).join(' ')+' ');
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(n) {
	let i, div0 = [], div1 = [];
	for(i = 1; i*i < n; i++) {
		if(n%i === 0) {
			div0.push(i);
			div1.push(n/i);
		}
	}
	if(i*i === n) div0.push(i);
	return [...div0, ...div1.reverse()];
}