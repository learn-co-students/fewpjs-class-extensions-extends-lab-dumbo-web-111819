class Polygon {
    constructor(array){
        this.sides = array.length
    }

    get countSides(array){
        return array.length
    }

    get perimeter(array){
        let total = 0
        array.forEach(ele => total += ele)
        return total
    }

}