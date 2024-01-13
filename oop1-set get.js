// let data = {
//     name   : "sai",
//     mail   : "01saiprasad@gmail.com",
//     number : 9011212430,
//     displayName:function(){
//         console.log(this.name + this.mail)
        

//     }
// }
// data.displayName('')


// let shreya = {
//     Name : "shreya",
//     City : "Warora",
//     Number : 866564681,
//     Prof : "Interior",
//     displayName:function(){
//         console.log(this.City+this.Prof+this.Name)
//     }
// }
// shreya.displayName()

// console.log(shreya.City)
// console.log(shreya['City'])

// shreya.city = "Pune"
// console.log(shreya.City)


// class Person {
//     setFirstName(fn){
//         this.firstName = fn
//     }
//     setLastName(ln){
//         this.lastName = ln 
//     }
//     setAge(ag){
//         this.age = ag 
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let shreya1 = new Person()
// console.log(shreya1)
// shreya1.setFirstName("shreya")
// shreya1.setLastName("tol")
// shreya1.setAge(26)
// shreya1.displayName()

class emp {
 constructor(nm,ct,no,wk){
    this.name = nm
    this.city = ct
    this.number = no
    this.work = wk

   }
   
   displayName(){
    console.log(this.name + this.city + this.number + this.work)
   }
}


   let shreya = new emp("shreya","warora",894549845,"interior")
   shreya.displayName()

   class Per{

    set firstName(fn){
        this.first_name = fn
    }
    get firstName(){
        return this.first_name
    }

    set lastName(ln){
        this.last_name = ln
    }
    get lastName(){
        return this.last_name
    }

    set rollNo(rn){
        this.roll_no = rn
    }
    get rollNo(){
        return this.roll_no
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
        return this.age
    }


    displayName(){
        console.log(this.first_name + this.last_name)
    }

    l et sai = new Person()
    console.log(sai)
    chinmay4.setFirstName("sai")
    chinmay4.setLastName("wate")
    chinmay4.setAge(26)
    chinmay4.setRollNo(68)
    chinmay4.displayName()