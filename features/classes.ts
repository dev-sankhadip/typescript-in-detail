class Vehicles {
    constructor(public color: string, private color2: string) {
    }
    // drive(): void {
    //     console.log('Chugga Chuggs');
    // }

    protected beep(): void {
        console.log("Beep");
    }

    private steer(): void {
        console.log("Steer");
    }
}


// const vehicle = new Vehicles('', '');

// vehicle.drive();



class Car extends Vehicles {
    constructor(public wheels: number, color: string) {
        super(color, color);
    }

    private drive(): void {
        console.log('Car - Chugga Chugga');
        console.log(this.color);
    }

    startDrivingProcess(): void {
        this.drive();
        this.beep();
    }
}


const car = new Car(3, "red");
car.startDrivingProcess();