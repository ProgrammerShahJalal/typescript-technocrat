{
    //
    
    // oop - inheritence

    class Person{
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(sleepingHour: number){
            console.log(`${this.name} sleeps for ${sleepingHour} hours.`);
        }
    }
    
    class Student extends Person {

        constructor(name: string, age: number, address: string){
           super(name, age, address);
        }

    }

    const student1 = new Student('Farabi', 24, 'Dhaka');
    
    
    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address);
            this.designation = designation;
        }


        takeClass(numberOfClass: number){
            console.log(`Teacher ${this.name} is teaching ${numberOfClass} classes`);
        }
    }

    const teacher = new Teacher('Mr Faruk Khan', 32, 'Savar', 'Data Scientist');
    
    
    
    
    
    
    
    
    //
}