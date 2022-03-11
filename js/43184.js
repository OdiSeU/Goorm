//https://level.goorm.io/exam/43184/%EC%A7%80%EB%A2%B0%EC%B0%BE%EA%B8%B0/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let M, N, T, mat = [];

rl.on("line", function(line) {
	if(!M) {
		[M, N] = line.split(' ').map(v=>+v);
		T = M;
		return;
	}
	mat.push([...line]);
	if(--T) return;
	console.log(solution(M, N, mat));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(M, N, mat) {
	for(let r = 0; r < M; r++) {
		for(let c = 0; c < N; c++) {
			if(mat[r][c] === '.') mat[r][c] = 0;
			if(mat[r][c] === '*') {
				for(let i = -1; i < 2; i++) {
					for(let j = -1; j < 2; j++) {
						if(i === 0 && j === 0) continue;
						if(0<=r+i && r+i<M && 0<=c+j && c+j<N) {
							switch(mat[r+i][c+j]) {
								case '.': mat[r+i][c+j] = 1; break;
								case '*': continue;
								default: mat[r+i][c+j]++;
							}
						}
					}
				}
			}
		}
	}
	return mat.map(v=>v.join('')).join('\n');
}