let apples: number = 5;


let value: null = null;


const date: Date = new Date();


let color: string[] = ['red', 'yellow', 'green'];


const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
    return i;
};

// When to use type annotations
// 1) function that returns 'any' type
const json = '{"x":10, "y":11}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates.x);

// 2) 