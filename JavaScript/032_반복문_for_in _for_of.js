data = {
    'one' : '하나',
    'two' : '둘',
    'three' : '셋',
    'four' : '넷',
}

// for in : key값을 순차적으로 가져옴

for (const i in data) {
    console.log(i); // in으로 하면 data의 key를 하나씩 순회
}

for (const i in data) {
    console.log(i); // in으로 하면 data의 key를 하나씩 순회
    console.log(data[i]); // data의 value까지 출력
}

let data2 = [10, 20, 30, 40]

for (const i in data2) {
    console.log(i); // 인덱스가 나오는 이유 -> 지금은 인덱스가 key값이라서!
}

// 유사 배열 객체
let data3 = {
    0 : 10,
    1 : 20,
    2 : 30,
    3 : 40,
}

for (const i in data3) {
    console.log(i);
}

// for of : value값을 순차적으로 가져옴

for (const i of 'hello world') {
    console.log(i);
}

let s = 0;
for (const i of '12345') {
    s += parseInt(i);
}

const seat = [['피카츄' , '라이츄', '파이리' ],
			  ['꼬부기' , '버터플', '야도란' ],
              ['피죤투' , '또가스', '메타몽' ]];

//for 문 사용
for (let i = 0; i < seat.length; i++) {
    const row = seat[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//for of 문 사용
for (let row of seat) {
    for (let pocketmon of row) {
        console.log(pocketmon);
    }
}
