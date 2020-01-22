class Polygon {
    constructor(array){
        this.sides = array.length
        this.array = array   
    }
    get countSides() {
        return this.sides
    }
    get perimeter(){
        let total = 0
        this.array.forEach(ele => total += ele)
        return total
    }
}

class Triangle extends Polygon{
    get isValid(){
        if((this.array[0] + this.array[1]) > this.array[2] && (this.array[0] + this.array[2]) > this.array[1] && (this.array[2] + this.array[1]) > this.array[0]){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]){
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.array[0] ** 2
    }

}