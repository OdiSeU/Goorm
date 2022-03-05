// https://level.goorm.io/exam/43137/%EC%9A%94%EC%9D%BC-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [m, d] = line.split(' ').map(v=>+v);
	console.log(solution(m, d));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(m, d) {
	let days = ['SUN', 'MON', 'THU', 'WED', 'THR', 'FRI', 'SAT'];
	let date = new Date(2016, m-1, d);
	if(date.getDate() !== d) return 'ERROR';
	return days[date.getDay()];
}