//https://level.goorm.io/exam/88520/%EB%86%80%EC%9D%B4%EA%B3%B5%EC%9B%90/quiz/1
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let T, N, K, arr = [];
	
	for await (const line of rl) {
		if(!T) {
			T = +line;
			continue;
		}
		if(!N) {
			[N, K] = line.split(' ').map(v=>+v);
			continue;
		}
		arr.push(line.split(' ').map(v=>+v));
		
		if(--N === 0) {
			console.log(solution(K, arr));
			arr = [];
			if(--T === 0) rl.close();
		}		
	}
	
	process.exit();
})();

function solution(K, arr) {
	let N = arr.length, min = 123456789;
	for(let i = 1; i < N; i++) arr[i][0] += arr[i-1][0];
	for(let i = 1; i < N; i++) arr[0][i] += arr[0][i-1];
	for(let i = 1; i < N; i++) {
		for(let j = 1; j < N; j++) {
			arr[i][j] += arr[i-1][j] + arr[i][j-1] - arr[i-1][j-1];
		}
	}
	
	for(let i = -1; i < N-K; i++) {
		for(let j = -1; j < N-K; j++) {
			let cnt = arr[i+K][j+K];
			if(i >= 0) cnt -= arr[i][j+K];
			if(j >= 0) cnt -= arr[i+K][j];
			if(i >= 0 && j >= 0) cnt += arr[i][j];
			min = Math.min(min, cnt);
		}
	}
	
	return min;
}