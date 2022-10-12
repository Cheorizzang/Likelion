// set은 집합이랑 똑같다.
let s = new Set('abcdeeeeeeeee'); // 중복을 제거하고 출력

console.log(s);
console.log(s.size);

// 문제
회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근'];

// 문제 1 : 몇명이 게시판에 게시물을 썼나요?

let 작성자 = new Set(회사게시판);
console.log(작성자.size);

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?

for (const i of 작성자) {
    console.log(i);
}
// 작성자 각각 뽑아내기

for (const i of 작성자) {
    console.log(i, 회사게시판.filter(e => e === i));
}
// 몇개가 중복인지 알아내기

for (const i of 작성자) {
    console.log(i, 회사게시판.filter(e => e === i).length);
}
// 중복의 개수 알아내기

///////

let s = new Set('abcdeeeeeeeee');

// Set에 값을 추가하기
s.add('f');
console.log(s);

// Set을 순환하기
for (let variable of s) {
  console.log(variable);
}

// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''));
console.log(ss); // 중복을 제거하고 출력

// 많이 쓰는 거니까 복사해서 쓰기

let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value))
// 합집합
let union = new Set([...a].concat(...b)) 
// 차집합
let dif = new Set([...a].filter(x => !b.has(x)));

// 배열 두개 이어붙이기

let a = [1, 2, 3]
let b = [4, 5, 6]

a.concat(...b) // 최종 배열 반환
a.push(...b) // length 반환