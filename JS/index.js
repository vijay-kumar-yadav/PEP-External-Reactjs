function hello(){
        if (true){//block
        let a = "aho";//block scope
        var b = "bye"//valid but the value || function scope
    }
    //console.log(a)
    console.log(b)
}
hello()



/*
let a = 2;
let a = 2; // redeclaration not possible

var b = 3;
var b = 3; // redeclaration is possible

const c = 3;
c = 4; // cannot be reassigned and redeclared
*/