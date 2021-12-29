//https://level.goorm.io/exam/43234/%EC%86%8C%EC%88%98-%EA%B3%A0%EB%A6%AC/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(+line).join('\n'));
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

function getPermutations(arr, n) {
	let result = [];
	if(n === 1) return arr.map(v => [v]);
	for(let i = 0; i < arr.length; i++) {
		let rest = [...arr.slice(0, i), ...arr.slice(i+1)];
		let concat = getPermutations(rest, n-1).map(v => [arr[i], ...v]);
		
		result.push(...concat);
	}
	return result;
}

function solution(n) {
	let seive = getPrimeSeive(n+n);
	let arr = Array.from(Array(n-1), (_, i) => i+2);
	let perm = getPermutations(arr, arr.length).map(v => [1, ...v]);
	let result = [];
	
	perm.forEach(p => {
		if(!seive[p[0] + p[n-1]]) return;
		for(let i = 1; i < p.length; i++) {
			if(!seive[p[i-1] + p[i]]) return;
		}
		result.push(p.join(' '));
	});
	
	return result;
}