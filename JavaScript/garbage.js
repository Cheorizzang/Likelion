let me = { age: 30 };
let you = me;

// me에는 객체의 참조(객체가 저장된 주소값) 저장
// you에도 객체의 참조 저장
// 참조 카운트 2

me = null;
// me가 끊겨서 참조 카운트 1

you = null;
// 참조 카운트 0
// garbage collector의 수거 대상이 됨

let x = {
    y: {
        z: 1,
    },
};

// x가 참조하는 객체를 object1, y가 참조하는 객체를 object2라고 하자

let a = x; // object1의 참조 카운트는 2 ( x, a )
x = 1; // object1의 참조 카운트는 1 ( a )

let b = a.y; // object2의 참조 카운트는 2 ( a.y, b )
a = 2; // object2의 참조 카운트는 1 ( b ) & object1의 참조 카운트는 0 ( )

// object1은 안에 있는 object2 때문에 못 사라짐
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수 (memory leak)가 발생했다고 표현함

function outer() {
    let privateVal = ['test'];

    function getPrivate() {
        return privateVal;
    }

    return getPrivate();
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

secretVal = null;
secretVal = undefined;

let aespa = ['카리나', '윈터', '지젤', '닝닝'];
// aespa.forEach((item, index,)=>{
//     aespa[index] = item + '💖'
// })

// console.log(aespa);

const aespa2 = aespa.map((item) => {
    return item + '💖';
});

console.log(aespa);
console.log(aespa2);
