// https://ko.javascript.info/nullish-coalescing-operator
// nullish 병합 연산자 : ??

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

// 선언만 하고 값을 안 넣음 - undefined -> d : undefined
let a;
let b;
let c;

let d = a ?? b ?? c;

// 카카오톡
let 실명;
let 별명 = 'licat';
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값; // licat

// 차이점
let height = 0;

console.log(height || 100); // 100 -> 0을 false 취급
console.log(height ?? 100); // 0 -> 0을 0 취급

// || : 0, null, undefined 
// ?? : null, undefined 

// falsy하다 : 0, null, undefined, "", NaN 
// nullish하다 : null, undefined
