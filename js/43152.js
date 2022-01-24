// https://level.goorm.io/exam/43152/%EC%99%84%EC%A0%84-%EC%A0%9C%EA%B3%B1%EC%88%98/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let T, t = 0, nums = [];

rl.on("line", function(line) {
	if(!T) {
		T = +line;
		return;
	}
	nums.push(+line);
	if(++t === T) {
		console.log(solution(nums));
		rl.close();
	}
}).on("close", function() {
	process.exit();
});

function solution(nums) {
	let cnt = 0;
	for(let i = 0; i < nums.length; i++) {
		if(Number.isInteger(Math.sqrt(nums[i]))) cnt++;
	}
	
	return cnt;
}