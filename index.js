// Your code here

class Polygon {
    constructor(array) {
      this.array = array;
    }
    get countSides() {
        return this.array.length
      }
    get perimeter() {
        return this.array.reduce((acc,cv)=>acc+cv,0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        // console.log(this.perimeter)
        // console.log(Polygon.perimeter())
        let arr=this.array
        for(let i=0;i<arr.length;i++){
            if(arr[i]>(this.perimeter-(arr[i]))){
                return false
            }
        }
        return true
    }
}

class Square extends Polygon{

    get isValid(){
        let arr=this.array
        for(let i=1;i<arr.length;i++){
            if(arr[i]!==arr[0]){
                return false
            }
        }
        return true

    }
    get area(){
        let arr=this.array
        return arr[0]**2
    }
}