{


// type Alias

type Student = {
    name: string;
    age?: number;
    contact: string;
    address: string;
}

const student1: Student = {
    name: 'farabi',
    age: 20,
    contact: '15876439876',
    address: 'Beijing'
}

const student2: Student & {
    hobby: string[];
} = {
    name: "Tang",
    age: 18,
    hobby: ["Reading","Coding"],
    contact: '1234567890', 
    address: "Shanghai",
}
/* ====Type Alias in Function====== */
type Add = (a:number, b:number) => number;
const  add:Add =(num1, num2)  => num1 + num2;







}
