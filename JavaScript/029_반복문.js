// 구조
// for(초기화식; 조건식; 증감식) {
// 	실행문;
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// airbnb 컨벤션에서 권장 -> for in
// IE 사용 가능
for (const i in ['one', 'two', 'three']) {
    console.log(i);
}

// airbnb 컨벤션에서 권장 -> for of
// IE 사용 불가
for (const i of ['one', 'two', 'three']) {
    console.log(i);
}

////

if (true) {
    var a = '1'
    let b = '2'
    const c = '3'
}

console.log(a); // 1 -> var는 변수명이 겹쳐지면 문제가 발생할 수 있기 때문에 쓰지 않는 것을 권장
console.log(b); // error -> block 안에서 선언하면 block 밖에서 참조할 수 없음
console.log(c); // error -> block 안에서 선언하면 block 밖에서 참조할 수 없음
// let, const : 블록레벨 스코프 -> {} 밖에서 사용 불가

for (let i = 0; i < 10; i++) {
    // i라는 변수를 블록 스코프마다 잠급니다
    console.log(i);
}

///

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i > 3) {
        break; // 0 1 2 3 4
    }
}

///

let data1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);
} // a b c d e

/// 바로 옆의 값과의 차이 구하기
let data2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data2.length; i++) {
    console.log(data2[i+1] - data2[i]);
}

let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data3.length -1; i++) {
    console.log(data3[i+1] - data3[i]);
}

// 가장 직관적인 코드
let data4 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data4.length; i++) {
    console.log(data4[i] - data4[i-1]);
} 

//무한반복 -> break 안 넣으면 망함
let i = 0;
for(;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break
    }
}

for(let i = 0;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break
    }
}

for(let i = 0;; i++) {
    console.log(i);
    if (i > 5) {
        break
    }
}

// 다음 수학점수의 평균을 구하세요.
let 수학점수 = [10, 99, 88, 85, 21, 35];

// 방법 1
let s1 = 0;
수학점수.forEach((value => s1 += value));
console.log(s1/수학점수.length);

// 방법 2
console.log(수학점수.reduce((a, b) => a + b, 0) / 6);

// 방법 3
let s2 = 0;
for (let i = 0; i < 수학점수.length; i++) {
    s2 += 수학점수[i];
}
console.log(s2 / 수학점수.length);

let user = [
    {
      "_id": "633e5b1711926cc42d1fbb4b",
      "index": 0,
      "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
      "age": 28,
      "name": "Mai Montoya",
      "gender": "female"
    },
    {
      "_id": "633e5b1718d6c001d2f771c7",
      "index": 1,
      "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
      "age": 22,
      "name": "Shelley Potts",
      "gender": "female"
    },
    {
      "_id": "633e5b17fecc26a897aa2283",
      "index": 2,
      "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
      "age": 22,
      "name": "Hensley Flores",
      "gender": "male"
    },
    {
      "_id": "633e5b17267fe16c24f00591",
      "index": 3,
      "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
      "age": 20,
      "name": "Holmes Morrow",
      "gender": "male"
    },
    {
      "_id": "633e5b17b30766b9c38594f5",
      "index": 4,
      "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
      "age": 25,
      "name": "Elisa Miller",
      "gender": "female"
    }
  ];

  let 여성 = 0;
  for (let i = 0; i < user.length; i++) {
    if (user[i]['gender'] === 'female') {
        여성 += 1;
    }
  }
  console.log(여성);

  console.log(user.length - 여성); // 남성 수 구하기

//   let 남성 = 0;
//   for (let i = 0; i < user.length; i++) {
//     if (user[i]['gender'] === 'female') {
//         여성 += 1;
//     } else if (user[i]['gender'] === 'male') { // undefined가 있을 수 있어서 확실히 써줌
//         남성 += 1;
//     }
//   }

//   console.log(남성);

// 암기해야 할 것 (재귀함수할 때 비교할 for문)
// 1. 구구단
for (let 단 = 2; 단 < 10; 단++){
    for (let 곱 = 1; 곱 < 10; 곱++) {
        console.log(`${단} X ${곱} = ${단 * 곱}`);
    }
}

// 2. 문자열 뒤집기
let txt = 'hello wolrd';
let result = '';
for (let i = txt.length -1; i >= 0; i--) {
    result += txt[i];
}

result = '';
for (let i = 0; i < txt.length; i++) {
    result = txt[i] + result;
}

// 3. 시그마
let ss = 0;
for (let i = 0; i < 101; i++) {
    s += i
}

// 4. 팩토리얼
let ss2 = 1;
for (let i = 1; i < 6; i++) { // 5!은 i < 6
    ss2 *= i
}

/////////////
// 문제 1 : 다음 입력된 숫자들의 합을 구하라

let x10 = '12345';
let result10 = 0;
for (let i = 0; i < x10.length; i++) {
    result10 += parseInt(x10[i])
}

// 문제 2 : 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

let x20 = Array(10000).fill(0).map((_, index) => (index + 1)).join('')
let result20 = 0;
for (let i = 0; i < x20.length; i++) {
    if (x20[i] === '8') {
        result20 += 1;
    }
}