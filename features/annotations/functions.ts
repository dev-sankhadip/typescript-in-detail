const add = (a: number, b: number): number => {
    return a + b;
}



const substract = function (a: number, b: number): number {
    return a - b;
}


// use void if function doesn't return anything
const logger = (a: string): void => {
    console.log(a);
}


// we should use never as function return type if we know, function will never reach the end of execution irrespective of the input
const throwError = (a: string): never => {
    throw new Error(a);
}



const objectDetails = {
    age: 12,
    name: 'sankhadip',
    setAge(age: number) {
        this.age = age;
    }
}
const { age, setAge }: { age: number, setAge: (age: number) => void } = objectDetails;
console.log(age);
setAge(30);
console.log(objectDetails.age);
