try {
    // code -> 실행시키고 싶은 코드 전부 작성
} catch(에러메시지) {
    // code -> try에서 예외가 발생했을 때 실행될 선언
} finally {
    // code -> try 선언이 완료된 이후에 실행된 선언. 예외 발생 여부와 상관없이 실행됨.
}

// 에러도 만들 수 있음
//new Error(message);
//new SyntaxError(message);
//new ReferenceError(message);

try {
    let x = 10;
    let y = 20;
    console.log(x + y);
} catch(e) {
    console.error(e);
} finally {
    console.log('finally');
}

// 두 개 비교해보기

try {
    let x = 10;
    let y = 20;
    console.log(x + y + z);
} catch(e) {
    console.error(e);
} finally {
    console.log('finally');
}

try {
    let x = 10;
    let y = 20;
    console.log(x + y + z);
} catch(e) {
    console.log(e);
} finally {
    console.log('finally');
}
// 일부 기능이 수행이 안될 수도 있지만 서비스는 정상적으로 작동함

let x = 10
let y = 20
console.log(x + y + z); // 일부러 에러를 만들었을 때?
let z = 30 // 윗줄에서 서비스가 멈춰서 할당에 실패함

a() // 로고 받아오기 메서드 - 현우
b() // 상품 정보 받아오기 메서드 - 희창 
c() // 장바구니 구현 함수 - 승완

// 원래 a()에서 문제가 발생되었을 경우 b(), c()도 안됨
// try 구문에서는 a()만 안되고 catch, finally같이 다른건 정상 작동

try {
    let x = 10;
    let y = 10;
    throw new Error('에러야!') // throw : 강제적으로 에러 발생
    console.log(x + y + z);
} catch(e) {
    console.error(e)
    console.dir(e);
    console.error(e.message)
} finally {
    console.log('end');
}

try {
    let x = 10;
    let y = 10;
    throw new SyntaxError(' 문법 에러야!') 
    console.log(x + y + z);
} catch(e) {
    console.error(e)
    console.error(e.message)
} finally {
    console.log('end');
}