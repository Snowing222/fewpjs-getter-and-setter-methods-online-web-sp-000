// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }

    set diameter(diameter){
        this.radius = diameter / 2
        console.log(this.radius ===this._radius)
        console.log(diameter)
        console.log(this.radius)
        console.log(this._radius)

    }

    set circumference(circumference){
        this.radius = circumference / (2 * Math.PI)
        console.log(circumference)
        console.log(this.diameter)
        console.log(this.radius)
        console.log(this._radius)
    }

    set area(area){
        this._radius = Math.sqrt(area / Math.PI)
    }

    get diameter(){
        return this.radius *2
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    get area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

}