// class person{
//     name   = "shreya"
//     city   = "warora"
//     number = 9877951525

//     displayName(){
//         console.log(this.name+this.number)

//     }

// }
// class personA{
//     name   = "priya"
//     city   = "warora"
//     number = 9984546468
//     field  = "Interior"

//     displayName(){
//         console.log(this.name+this.number)
//     }
//     displayField(){
//         console.log(this.field)

//     }
// }
// let chatni = new personA()
// console.log(chatni.name)
// console.log(chatni.city)
// console.log(chatni.number)
// console.log(chatni.field)

// chatni.displayName()
// chatni.displayField()

// let shreya = new person()
// console.log(shreya.name)
// console.log(shreya.city)
// console.log(shreya.number)
//============================================//

// class person{
//     name   = "shreya"
//     city   = "warora"
//     number = 9877951525

//     displayName(){
//         console.log()

//     }
// }
// class personA extends person{
//     field = "Interior"
//     displayField(){
//         console.log()
//     }
// }    
// let shreya = new personA()
// console.log(shreya.name)
// console.log(shreya.city)
// console.log(shreya.number)
// console.log(shreya.field)
// shreya.displayName()
// ===================================//
class personA{
    constructor(nm,cy,num){
        this.name=nm
        this.city=cy
        this.number=num

    }
    displayName(){
        //console.log(this.name+this.city+this.number) 
        console.log()
        //set blank to print once
    }


}

class personB extends personA {
    field = "Interior"
    displayField(){
        // console.log(this.field) //set blank to print once
        console.log()

    }
}

let shreya = new personB("Shreya","warora",988965864)
console.log(shreya.name)
console.log(shreya.city)
console.log(shreya.number)
console.log(shreya.field)
shreya.displayName()
shreya.displayField()