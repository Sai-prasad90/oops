// Hierarchical inheritance
class Mother {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

displayMName(){
        console.log(this.firstName + this.lastName)
    }
}

class Daughter1 extends Mother {
    constructor(fn,ln,dn1){
        super(fn,ln)  
        this.dname = dn1
    }
    displayD1Name(){
        console.log(this.dname + this.lastName)
    }
}

class Daughter2 extends Mother {

    constructor(fn,ln,dn2){
        super(fn,ln)  
        this.d2name = dn2
    }
    displayD2Name(){
        console.log(this.d2name + this.lastName)
    }

}
let shreya  = new Daughter1("rekha","tol","shreya")
let priya  = new Daughter2("rekha","tol","priya")
shreya.displayMName();
shreya.displayD1Name();
priya.displayMName();
priya.displayD2Name();