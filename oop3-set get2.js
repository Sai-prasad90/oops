class employee{
    set name(nm){
        this.name1 = nm

    }
    get name(){
        return this.name1
    }
    set age(ag){
        this.age1 = ag

    }
    get age(){
        return this.age1
    }
    set city(cy){
        this.city1 = cy
    }
    get city(){
        return this.city1
    }
}
let swayam = new employee()
console.log(swayam)
swayam.name="swayam"
swayam.age = 26
swayam.city = "pune"
console.log(swayam)

console.log(swayam.name)
console.log(swayam.age)
console.log(swayam.city)