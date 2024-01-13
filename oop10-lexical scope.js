// lexical

//function
//      function
//          function


function sub1 (){
    let a = 2
    let b = 10
    console.log(a-b)
    function sub2(){
        let a1= 2
        let b1= 3
        function sub3(){
            let x = 25
            console.log(a-b-a1-b1)

        }
        sub3()

    }
    sub2()
        
}
sub1()


//======================
function multi(){
    let x1 = 10 
    let y1 = 5 
    return x1 * y1 
   
}
let save = multi()
console.log(save)


//=====================

function  div(){
    let M = 10 
    let N = 5 
    return function(){
        console.log(M/N)
    }
}

let MN = div()
console.log( MN )

//=====================

//function delcaration
function div1(ab,cd){
    return ab * cd
}
let d = div1(5,6)
console.log(d)

//syntax= function *functionName*(para)

//=====================

//function expression
let mod = function(l,o){
    return l % o
}
let q = mod(5,2)
console.log(q)
console.log(mod)

//syntax= *function name* = function (para)

//=====================

//arrow function
let mulltiply = (g,h) =>{
    return g * h
}
let mult=mulltiply(6,3)
console.log(mult)

//syntax= let *functionName* = (para) => {
//                      } 