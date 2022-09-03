#https://level.goorm.io/exam/149359/%EA%B8%B0%EB%B3%B8-%EC%82%AC%ED%83%95-%EA%B0%80%EC%A0%B8%EA%B0%80%EA%B8%B0/quiz/1

input()
count = [0, 0]
for i in map(int, input().split()):
	count[i%2] += 1
	
if count[0] == count[1]:
	print('tie')
else:
	print(max(count))