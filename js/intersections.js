export default class {
    constructor() {
        this.intersections = []

        this.createIntersection(0, 0)
    }

    createIntersection(x, y) {
        this.intersections.push({
            x: x,
            y: y,
            value: {
                north: [],
                south: [],
                west: [],
                east: [],
            }
        })
    }

    findIntersection(x, y) {
        this.intersections.forEach(intersection => {
            if (intersection.x === x && intersection.y === y) {
                return intersection
            }
        })
    }

    addCar(car) {
        this.findIntersection(car.x, car.y)?.value[car.direction].push(car)
    }

    update() {
        this.intersections.forEach(intersection => {
            intersection.value.forEach(direction => {
                for (let index = 0; index < direction.length; index++) {
                    direction[index].update()
                }
            })
        })
    }
}