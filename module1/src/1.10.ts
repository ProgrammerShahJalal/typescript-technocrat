{

// union types


type UnionType = string | number;
let myVar: UnionType;

myVar = "Hello"; // OK


type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+" | "AB+" | "O+" | "A-" | "B-" | "AB-" | "O-";
}

const user: User = {
    name: "Shah Jalal",
    email: "shah.jalal.ju.bd@gmail.com",
    gender: "male",
    bloodGroup: "B+",
}


type FrontendDeveloper = {
    name: string;
    skills: string[];
    designation1: "Frontend Developer"
}
type BackendDeveloper = {
    name: string;
    skills: string[];
    designation2: "Backend Developer"
}


type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackdeveloper = {
    name: 'shahjalal',
    skills: ['reactjs', 'nodejs', 'expressjs', 'mongodb', 'dsms'],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
}


}