//https://level.goorm.io/exam/43082/%EC%B5%9C%EB%8B%A8-%EA%B1%B0%EB%A6%AC-%EA%B5%AC%ED%95%98%EA%B8%B0/quiz/1
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, data = [];

rl.on("line", function(line) {
	if(!N) {
		N = +line;
		return;
	}
	data.push(line.split(' ').map(v=>+v));
	if(--N === 0) {
		solution(data);
		rl.close();
	}
}).on("close", function() {
	process.exit();
});

function solution(map) {
	let N = map.length;
	let queue = [[0,0,1]];
	map[0][0] = 0;
	while(queue.length) {
		let [nowR, nowC, cnt] = queue.shift();
		if(nowR === N-1 && nowC === N-1) {
			console.log(cnt);
			break;
		}
		for(let [r, c] of [[-1,0],[0,-1],[1,0],[0,1]]) {
			let [nextR, nextC] = [nowR + r, nowC + c];
			if(0 <= nextR && nextR < N && 0 <= nextC && nextC < N) {
				if(map[nextR][nextC]) {
					queue.push([nextR, nextC, cnt+1]);
					map[nextR][nextC] = 0;
				}
			}
		}
	}
}