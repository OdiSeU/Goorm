// https://level.goorm.io/exam/43113/substring/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let str = '';

rl.on("line", function(line) {
	if(!str) {
		str = line;
		return;
	}
	let [from, len] = line.split(' ').map(v=>+v);
	console.log(solution(str, from, len));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(str, from, len) {
	return str.substr(from-1, len);
}