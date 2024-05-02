{

// Ternary, Optional Chaining & Nullish Coalescing Operator

// Ternary Operator
const age: number | undefined = 25;
const message: string = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // Output: "You are an adult"

// Optional Chaining Operator
type Person = {
    name: string;
    age?: number;
    address?: {
        city: string;
        postalCode?: string;
    };
};

const person: Person = {
    name: "John",
    // age: 30, // Uncomment this line to see the effect of optional chaining
    address: {
        city: "New York",
        // postalCode: "10001", // Uncomment this line to see the effect of optional chaining
    },
};

const postalCode = person.address?.postalCode;
console.log(postalCode); // Output: undefined



// Nullish Coalescing Operator
// Nullish --> Null | Undefine --> desicion making

const defaultValue = "Default Value";
const userInput: string | null | undefined = null;
const valueToUse = userInput ?? defaultValue;
console.log(valueToUse); // Output: "Default Value"




}