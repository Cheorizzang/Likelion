// 함수의 구조
// 파선아실
function 안녕(파라미터) {
    console.log(파라미터);
    console.log('hello world');
    return 100 
    // 자신을 불러온 자리에 그 값을 대입 -> 안녕(아규먼트)가 100
}

let 아규먼트 = 1000
안녕(아규먼트)
console.log(안녕(아규먼트) + 안녕(아규먼트)); // 200

/*
console.log('hello world')
hello world
undefined

console.log(console.log('hello world'))
hello world
undefined
undefined
*/

function 안녕() {
    console.log('hello'); // return 구문의 값이 생략되면 undefined
}

안녕()
console.log(안녕() + 안녕()); // NaN
console.log(String(안녕()) + String(안녕())); // undefinedundefined

//

function 안녕() {
    console.log('hello');
    console.log('hello');
    console.log('hello');
    return // 함수는 return을 만나면 종료되고, return은 자신을 호출한 자리에 반환값을 돌려줌
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
}

안녕() // hello hello hello

// 함수를 사용하는 이유
// 1. 재사용성 -> 재사용 안해도 함수로 만드는 것을 권장
// 2. 유지보수 -> 3번 + 변수의 스코프 제한
// 3. 구조 파악 용이
// 4. 추상화로 개발하는 것이 객체지향 프로그래밍(OOP, Object Oriented Programming) 언어 철학에 적합

// 함수의 다양한 형태
// 1. 함수의 아규먼트에 따른 반환값
function 함수1(a, b, c) {
    return a + b + c
}

// console창의 기능. 마지막 라인에 한하여 console log()를 찍지 않아도 return 값을 console창에 출력해줌.
함수1(10, 20, 30) 
함수1(10, 20, 50) 

// console.log의 리턴값은 undefined
console.log(함수1(10, 20, 30));
console.log(함수1(10, 20, 50));
// 60 80 undefined - 마지막 undefined는 원래 두번 나와야 하는데 합쳐진 것

// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40) // 에러아님. 60

// 필요 이하의 아규먼트를 넣었을 때
함수1(10, 20) // NaN

/*
function 함수1 (a, b, c) {
    return a + b + String(c)
}

함수1(10, 20) // '30undefined'
*/

// 2. 구조분해할당을 이용한 아규먼트 처리
function 함수2(a, b, ...c) {
    console.log(c);
    return Math.max(...c)
}

함수2('hello', 'world', 10, 20, 30, 40)

function 함수2([a, b], ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

함수2([1, 2], 10, 20, 30, 40)

// 기본값 할당
function 함수3(a=10, b=20, c=30) {
    return a + b + c
}

console.log(함수3()); // 60
console.log(함수3(100)); // 150
console.log(함수3(100, 200)); // 330
console.log(함수3(100, 200, 300)); // 600

console.log(함수3(c=1000)); 
// c가 아니라 a가 1000으로 들어감
// 1050
console.log(함수3(c=1000, a=2000)); 
// 순서대로 a, b에 각각 1000, 2000이 들어감
// 3030

// 4. 함수에서 객체를 아규먼트로 전달받는 방법
function 함수4 (회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) {
    console.log('함수기능');
    return
}

함수4('Gold', true, true, true, '대화방 전체 백업 가능', true)
// 가독성이 떨어짐

function 함수4({
        회원등급, 
        글쓰기, 
        글읽기, 
        채널관리, 
        백업, 
        소셜로그인여부
    }){
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
    return
}

함수4({
    회원등급: "Gold", 
    글쓰기: true, 
    글읽기: true, 
    채널관리: false, 
    백업: "부분가능", 
    소셜로그인여부: true
})

///////입력되지 않은 값은 undefined///////

function 함수4({
        회원등급, 
        글쓰기, 
        글읽기, 
        채널관리, 
        백업, 
        소셜로그인여부
    }){
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
    return
}

함수4({
    회원등급: "Gold", 
    채널관리: false, 
    백업: "부분가능", 
    소셜로그인여부: true
})

///////초깃값 설정1///////

function 함수4({
        회원등급 = "Gold", 
        글쓰기 = true, 
        글읽기 = true, 
        채널관리 = true, 
        백업 = "부분가능", 
        소셜로그인여부 = true
    }){
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
    return
}

함수4({
    회원등급 : "Silver", 
    소셜로그인여부: true
})

///////초깃값 설정2///////
// 참고삼아서만 보세요.
let one
let two
let three
{one, two, three}

let {one, two, three} = {one: 10, two: 100, three: 200} // 작동
let {one:30, two, three} = {one: 10, two: 100, three: 200} // Error

let {one = 30, two, three} = {one: 10, two: 100, three: 200} // 등호가 된다는 원리가 이 이유입니다.

function 함수4({
    회원등급: "Gold", // 안되는 이유? 
    글쓰기, 
    글읽기, 
    채널관리, 
    백업, 
    소셜로그인여부
}){
console.log('함수기능')
console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
return
}

함수4({
회원등급 : "Silver", 
소셜로그인여부: true
})

////// 동현님 글 //////
function 함수({
        a = 2, 
        b = 1, 
        c = 3
    } = {}) {
    console.log(a, b, c);
    return a + b + c;
}
console.log(함수({a: 20, b: 30, c: 10}));
함수() // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a=10, b=20, c=30){
    return a + b + c
}
함수()

// X
function 함수({a=10, b=20, c=30}){
    return a + b + c
}
함수()

// O
function 함수({a=10, b=20, c=30}){
    return a + b + c
}
함수({}) // 이 코드를 축소한 코드가 위의 코드입니다.
// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined

// 재귀함수 : 내가 나를 호출하는 함수 - 무한동력
// 재귀함수(Top-down, 분할정복, 락드릴) vs 반복문(Bottom-up)

function factorial(n) {
    if (n <= 1) { // 종료조건이 없으면 무한반복됨
        return 1
    }
    return n * factorial(n - 1)
}

factorial(5)

/*
                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

let result = 1;
for (let i = 2; i < 6; i++) {
    result *= i
}
console.log(result);

//

function sigma(n) {
    if (n <= 1) { // 종료조건이 없으면 무한반복됨
        return 1
    }
    return n + sigma(n - 1)
}

sigma(100)

let result = 0;
for (let i = 1; i <= 100; i++) {
    result += i
}
console.log(result);

// 수학공식으로 풀면 순회를 돌지 않아서 더 좋음
let n = 100;
console.log(n * (n + 1) / 2)

// 재귀함수로 문자열 뒤집기
function reverse(txt) {
    if (txt.length <= 1) {
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello')

/*
참고사항
'hello'.slice(1)
'ello'

n                   txt.length <= 1         return
reverse('hello')    false                   reverse(txt.slice(1)) + 'h' = 'olleh'
reverse('ello')     false                   reverse(txt.slice(1)) + 'e' = 'olle'               
reverse('llo')      false                   reverse(txt.slice(1)) + 'l' = 'oll'            
reverse('lo')       false                   reverse(txt.slice(1)) + 'l' = 'ol'                      
reverse('o')        true                    'o'                      
*/

txt = "hello";
result = '';
for (const i of txt) {
    result = i + result
}

console.log(result);    

// 지역변수와 전역변수

// 스코프에 대한 좋은 글
// https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope

// 블록레벨스코프
if(true){ // for문이어도 마찬가지입니다.
    let x = 10;
    const y = 10;
}
console.log(x, y)

// 밖에 선언된 x는 함수 내부에서도 접근 가능합니다.
let x = 100
function xplus(){
    x = x + 10
}

xplus()
console.log(x)

// 함수가 종료된 다음에는 선언된 변수는 휘발됩니다.
function xplus(){
    let x = 100
    x = x + 10
}

xplus()
console.log(x)

// 함수 안에 함수
function a(){
    console.log('a 실행')
    function b(){
        console.log('b 실행')
    }
    b()
}

a()

// 화살표 함수
function 함수(x, y) {
    return x + y
}

let 함수 = (x, y) => x + y

//

function 함수(x, y) {
    let z = x + y
    return z
}

let 함수 = (x, y) => {
    let z = x + y
    return z
}

// 호이스팅이 다름 -> 35번 파일과 이어짐



