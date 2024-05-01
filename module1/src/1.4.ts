// BASIC DATA TYPE
// ----------------------------

// String
let myName: string = "John Doe";
console.log(myName);  // Output: John Doe

// Number
let age: number = 25;
console.log(age);     // Output

// Bolean
let isMarried: boolean = true;
console.log(isMarried);     // Output: true

// Array
let familyMembers: string[] = ["Jane", "Doe"];   // TypeScript automatically infers the type of array elements if we don't specify it explicitly

// Undefined
let x: undefined = undefined;
console.log(x);          
// Null
let y: null = null;
console.log(y);           

// Any
let z: any = "I am a string!";
z = { firstname: 'John', lastname: 'Doe' };
console.log(z);                               // Output: I am a string! or {firstname:"John",lastname:"Doe"}

// Void
function logMessage(message:string):void{
    console.log(message)
}
logMessage("Hello World!");   // Output: Hello World!


//touple --> array --> order --> type of values  can be different
let person : [string,number];      
person =  ["John",30];