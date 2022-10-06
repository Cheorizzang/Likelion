// 구조
// while (조건문) {
//     실행문;
// }

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

while (true) {
    console.log('무한반복!!');
}

// 구구단은 암기하셈
let i = 2;
let j = 1;
while (i < 10) {
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1; // j는 1~9
    i++; // 다음 단
}

let value = [10, 20, 30, 40];
let x = 0;
while (x < value.length) {
    console.log(value[x]);
    x++;
}

// break : 4단까지만 출력
let i = 2;
let j = 1;
while (i1 < 10) {
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;
    if (i >= 4) {
        break; // 위의 반복문을 탈출
    }
    i++;
}

// continue : 4단만 출력 안 하기
while (i < 10) {
    i++;
    if (i == 4) {
        continue; // 다음 루프(반복문)으로 감
    }
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1; // 마지막에 1 빼려면 어케해야댐
}

for (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        continue // 아래껄 실행시키지 않고 다음 루프로 감
    }
    console.log(i);
}

// do ... while : while이랑 동일한데 무조건 한번 실행하고 싶을 때

let sum = 0;
let i = 0;

do {
		i++;
		sum += i;
} while (i < 10);

console.log(sum);

/// 레이블은 권장하지 않음
// - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// - `break`문은 모든 레이블에서 사용할 수 있다.
// - `continue`문은 반복문에서만 사용 가능하다.

timestable:
for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break timestable; // x가 4일 때 break해서 timestable로 이동 -> 루프가 몇개든 상관 없이 바로 이동
		console.log(`${x} X ${y} = ${x * y}`);
	}
}

for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break; // 나를 감싼 루프 하나만 벗어남
		console.log(`${x} X ${y} = ${x * y}`);
	}
}

