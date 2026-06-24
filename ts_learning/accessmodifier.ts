class Car {
    private brand: string;
    private speed: number;
    protected fuel: string;

    constructor(brand: string, speed: number, fuel: string) {
        this.brand = brand;
        this.speed = speed;
        this.fuel = fuel;
    }

    public accelerate() {
        this.speed += 10;
        console.log(`Accelerating to ${this.speed} km/hr`);
    }

    private refuel() {
        console.log(`Refueling with ${this.fuel}`);
    }

    protected honk() {
        console.log("Honk Honk");
    }

    public display() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Fuel: ${this.fuel}`);
    }
}

let myCar = new Car("Toyota", 60, "Gasoline");

myCar.display();
myCar.accelerate();
myCar.display();