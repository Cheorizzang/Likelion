// 1. window에서 호출했을 때
function a(){ 
    console.log(this) 
}
a();
// 함수를 호출해준 애가 this -> window

// 2. object로 한번 감싸고 호출했을 때
let test = {
    one: 1,
    two: 2,
    three: function(){
        console.log(this);
    }
}

test.three() ; // three를 호출한 애가 this -> test

let test2 = test.three 
test2(); // test2를 호출한 애가 this window

// 추가 예제 //

function sayName(){
    console.log(this.name);
}

var name = "Hero"; // window.name = Hero
// 변수, 함수를 var로 선언하면 window에 등록됨 

let Peter = {
    name: "Peter Parker",
    sayName: sayName
}

let Bruce = {
    name: "Bruce Wayne",
    sayName: sayName
}

sayName(); // Hero
Peter.sayName(); // Peter Parker
Bruce.sayName(); // Bruce Wayne

function a(){
    console.log(this.name);
    function b(){
        console.log(this.name);
    }
    b();
}
a();

function a(){
    console.log(this);
    function b(){
        console.log(this);
    }
    b();
}
a(); // a와 b 모두 this는 window

//

function sayName(){
    console.log(this);
}

var c = {
    'hello':'world',
    'say': sayName
}

var b = {
    'c':c
}

var a = {
    'b':b
}

a.b.c.say() // this는 c

// a.b.c.d.e.say() -> this는 e

