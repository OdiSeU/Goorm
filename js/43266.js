// https://level.goorm.io/exam/43266/%ED%99%A9%EC%A0%9C%EC%9D%98-%EB%AA%B0%EB%9D%BD/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let [N, K] = line.split(' ').map(v=>+v);
	console.log(solution(N, K));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(N, K) {
	let arr = Array.from(Array(N), (_, i) => (i + 1) % N);
	let last = N-1, now, ans = [];
	while(N-- > 2) {
		now = arr[last];
		[arr[last], arr[now]] = [arr[now], 0];
		for(let i = 0; i < K-1; i++) last = arr[last];
	}

	for(let i = 0; i < arr.length; i++)
		if(arr[i]) ans.push(i+1);
	
	return ans.join(' ');
}