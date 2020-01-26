// Your code here
class Polygon {
    constructor(arr){
        this.sides = arr
    }

    get countSides() {
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((a,b) => {
            return a + b
        })
    }
}
class Triangle extends Polygon{
    get isValid(){
        let arr = this.sides
        if(validator(arr)){
            return true
        }
        else{
            return false
        }
    }
   
}
 
let validator = (arr) => {
    if(arr[0] + arr[1] > arr[2] && arr[2] + arr[0] > arr[1] && arr[1] + arr[2] > arr[0]){
        return true
    }
    else{
        return false
    }
}

class Square extends Polygon{
    get isValid(){
       let arr = this.sides
       if(this.perimeter / arr.length === arr[0]){
        return true
       }
       else{
        return false

       }
    }
    get area (){
        let arr =  this.sides
        return arr[0] * arr[1]
    }

}