// // // // //44

// // // // // // lexical scope 

// // // // // function addB(){
// // // // //     let x = 10 
// // // // //     let y  = 5
// // // // //     console.log(x+y)
// // // // //     function addC(){
// // // // //         let s = 10 
// // // // //         let t = 5
       
// // // // //         console.log(q1)
// // // // //         console.log(q1)
// // // // //         function addE(){
// // // // //             let q1 = 7
// // // // //             console.log(x+y+s+t)
// // // // //         }

// // // // //         addE()
// // // // //     }
// // // // //     addC()
// // // // // }
// // // // // addB()


// // // // // program 1 
// // // // // Lexical scope 
// // // // // function addA(){
// // // // //     let a = 10 
// // // // //     let b = 5 
// // // // //     console.log(a+b)
// // // // //     function addB(){
// // // // //         let s = 9 
// // // // //         let t = 6
// // // // //         console.log(a+b)
// // // // //         console.log(s+t)
// // // // //         function addC(){
// // // // //             console.log(s+t+a+b)
// // // // //         }

// // // // //         addC()
// // // // //     }
// // // // //     addB()
// // // // // }
// // // // // addA()

// // // // // program 2 
// // // // // function addE(){
// // // // //     let x = 10 
// // // // //     let y = 5 
// // // // //     return x + y 
// // // // //     console.log("hello")
// // // // // }
// // // // // let q2 = addE()
// // // // // console.log(q2)


// // // // // program 3  // closures 

// // // // // function  addF(){
// // // // //     let a = 10 
// // // // //     let b = 5 
// // // // //     return function(){
// // // // //         console.log(a+b)
// // // // //     }
// // // // // }

// // // // // let q3 = addF()
// // // // // console.log(q3)


// // // // // function declaration 
// // // // function addE(x,y){
// // // //   return x + y
// // // // }
// // // // let q4 = addE(12,4)
// // // // console.log(q4)

// // // // // function expression
// // // // let addFa  = function(x,y){
// // // //   return x + y
// // // // }
// // // // let q5 = addFa(2,1)
// // // // console.log(q5)
// // // // console.log(addFa)

// // // // // arrow function 
// // // // let addG  = (x,y)=>{
// // // //   return x + y
// // // // }
// // // // let q6 = addG(2,1)
// // // // console.log(q6)
// // // // console.log(addG)


// // // // // function addJ(){
// // // // //     return 7 + 3
// // // // // }
// // // // // addJ()

// // // // // let addH = function(){
// // // // //     return 9 + 7
// // // // // }

// // // // // let addN = ()=>{
// // // // //     console.log('hello')
// // // // // }



// // // // //program 3  // closures 

// // // // function  addF(){
// // // //   let a = 10 
// // // //   let b = 5 
// // // //   return function(){
// // // //       return a + b
// // // //   }
// // // // }
// // // // let q3 = addF()
// // // // // let q3 = function(){
// // // // //     return a + b
// // // // // }
// // // // let q33 = q3()
// // // // console.log(q33)

// // // //lexical revising...

// // // // function mult(){
// // // //   let a = 2
// // // //   let b = 10
// // // //   console.log(a*b)
// // // //   function mult2(){
// // // //       let a1= 2
// // // //       let b1= 3
// // // //       function mult3(){
// // // //           let x = 25
// // // //           console.log(a-b-a1-b1)

// // // //       }
// // // //       mult3()

// // // //   }
// // // //   mult2()
      
// // // // }
// // // // mult()



// // // //three ways of deining function are
// // // // function declaration
// // // //function expression
// // // //functio arrow

// // // //syntax= function *functionName*(para)

// // // //=====================

// // // //function expression
// // // let mod = function(l,o){
// // //   return l % o
// // // }

// // // let q = mod(5,2)
// // // console.log(q)
// // // console.log(mod)

// // // //syntax= *function name* = function (para)

// // // //=====================

// // // //arrow function
// // // let mulltiply = (g,h) =>{
// // //   return g * h
// // // }
// // // let mult=mulltiply(6,3)
// // // console.log(mult)

// // // //syntax= let *functionname* = (para) => { object }



// // ////=============================================================


// // Setting this keyword manually 


// // bind() , call , apply

// // // object 
// // let info = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     displayName:function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }
// // let info2 = {
// //     firstName:"amol",
// //     lastName:"rao"
// // }

// // let info3 = {
// //     firstName:"sarika",
// //     lastName:"pansare"
// // }

// // let info4 = {
// //     firstName:"ram",
// //     lastName:"dani"
// // }

// // console.log(info.firstName)
// // console.log(info.lastName)
// // info.displayName()


// // let fn = info.displayName
// // let fn = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// // fn()

// // fn = fn.bind(info2)
// // // let fn = function(){
// // //     console.log(info2.firstName + info2.lastName)
// // // }
// // fn()

// // let fn = function(){
// //     console.log(info3.firstName + info3.lastName)
// // }
// // fn = fn.bind(info3)
// // fn()

// // //================================================


// // let  car1 = {name:"BMW",color:"white"}
// // let  car2 = {name:"Audi",color:"Blue"}
// // let  car3 = {name:"Skoda",color:"Red"}
// // let  car4 = {name:"Polo",color:"Matt black"}


// // let displayColor = function(x) {
// //     console.log(this.color)
// //     console.log(x)
// // }
// // //displayColor()
// // displayColor.call(car1,"hello")
// // displayColor.call(car2,"hi")
// // displayColor.call(car3,"bye")
// // displayColor.call(car4 , "bye bye")

// // //=================================================


// // let  car5 = {name:"BMW",color:"white"}
// // let  car6 = {name:"Audi",color:"Blue"}
// // let  car7 = {name:"Skoda",color:"Red"}
// // let  car8 = {name:"Polo",color:"Matt black"}

// // let  displayName =  function(a,b,c,d,e){
// //     console.log(this.name)
// //     console.log(a)
// //     console.log(b)
// //     console.log(c)
// //     console.log(d)
// //     console.log(e)
// // }
// // displayName.apply(car5,[11,22,33,-90,76,77,99,66])

// //==============================
// //let var const
// //===================================


// // let x = 10 
// // console.log(x)
// // difference between let var and const with respect to assignment

// let x = 10 
// console.log(x)
// x = 300 
// console.log(x)

// const h1 = 100 
// console.log(h1)
// //h = 900

// var y = 90
// console.log(y)
// y = 9000
// console.log(y)
// //--------------------------------------------------------------
// // difference between  let const and var with respective to scope
// // let is blocked scope


// // program 2

// // {
// //     let k = 100
// //     console.log(k)
// // }
// // console.log(k)

// // program  3

// let  k = 900
// {
//     let k = 100
//     console.log(k) // 100
// }
// console.log(k) // 900

// // program 4 

// let j = 1000 
// {
//     j = 9000
//     console.log(j) // 9000
// }
// console.log(j) // 9000
  

// // program 5

// // let l = 1000
// // l = 900
// // console.log(l) // 900
// // {
// //     let l = 800
// //     l = 600
// //     console.log(l) // 600
// // }
// // console.log(l) // 900

// // const is also blocked scope 
// // program 5

// // {
// //     const h = 1000
// //     console.log(h)
// // }
// // console.log(h)

// // program 6

// // const h = 100
// // {
// //     console.log(h)
// // }
// // console.log(h)

// // program 7

// // const h2 = 100
// // {
// //     h2 = 1000
// //     console.log(h2)
// // }
// // console.log(h2)

// // program 8
// const h2 = 100
// {
//     const  h2 = 1000
//     console.log(h2) // 1000
// }
// console.log(h2) // 100

// // program 9 
// // var is function scoped

// // var h3 = 100 
// // function addC(){
// //     console.log(h3) // 100
// //     h3 = 99
// //     console.log(h3) // 99
// // }
// // console.log(h3) // 100
// // addC()
// // console.log(h3) // 99

// // program  10
// // var h3 = 100 
// // function addC(){
// //     var h3 = 99
// //     console.log(h3)  // 99
// //     {
// //         let h3 = 900
// //         console.log(h3) // 900
// //     }
// //     console.log(h3) // 99

// // }
// // console.log(h3)  // 100
// // addC()
// // h3 = 500 
// // console.log(h3)  // 500



















