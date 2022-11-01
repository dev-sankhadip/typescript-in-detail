interface Vehicle {
    summary(): string;
}
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return `Hello ${this.name}`;
    }
}


const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return `Sugar ${this.sugar}`
    }
}

const printVehicle = (vehicle: Vehicle) => {
    console.log(vehicle.summary());
}


printVehicle(oldCivic);
printVehicle(drink);