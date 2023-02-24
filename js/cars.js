export default class {
    constructor(x, y, direction, intersectionHandler) {
        this.x = x
        this.y = y
        this.direction = direction
        this.intersectionHandler = intersectionHandler

        intersectionHandler.addCar(this)
    }

    update() {
        let lane = this.intersectionHandler.findIntersection(this.x, this.y)
    }
}