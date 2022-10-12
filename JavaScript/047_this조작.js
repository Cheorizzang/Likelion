// this 잘 안 씀. 그래서 call도 잘 안 씀.

var peter = {
    name : 'Peter Parker',
    sayName : function(){    
        console.log(this.name);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName(); // Peter Parker
peter.sayName.call(bruce); // Bruce Wayne
  
// call은 인자가 하나

var peter = {
    name : 'Peter Parker',
    sayName : function(느낌표){    
        console.log(this.name + 느낌표);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName('!');
peter.sayName.call(bruce, '!'); // sayName을 호출하는 건 bruce

// apply는 인자가 여러개

var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
        console.log(this.name+ ' is '+ is + ' or ' + is2);
    }
}
  
var bruce = {
name : 'Bruce Wayne',
}
  
peter.sayName.apply(bruce, ['batman', 'richman']);
// sayName을 호출하는 건 bruce

//

function sayName(){
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName : sayName
}

var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce)
}

sayName(); // window의 이름은 없으니까 공백
peter.sayName(); // bruce
bruce.sayName(); // bruce -> sayName을 호출하는 건 bruce


