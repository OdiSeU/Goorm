//https://level.goorm.io/exam/43086/%EC%95%8C%ED%8C%8C%EB%B2%B3-%EB%B9%88%EB%8F%84-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	process.stdout.write(solution(line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(s) {
	let arr = Array(26).fill(0), ans = '';
	for(let i = 0; i < s.length; i++) {
		let c = s[i].toLowerCase();
		if('a' <= c && c <= 'z') arr[c.charCodeAt() - 97]++;
	}
	for(let i = 0; i < 26; i++) {
		ans += String.fromCharCode(97+i) + ' : ' + arr[i] + '\n';
	}
	return ans;
}