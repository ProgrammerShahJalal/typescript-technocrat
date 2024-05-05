{
    //
    
    //Class And Object
    
    class Animal  {
        name: string;
        specifies: string;
        sound: string;

        constructor(name: string, specifies: string, sound: string){
            this.name = name;
            this.specifies = specifies;
            this.sound = sound;
        }
        // methods ==> if we write a function in class, it is called methods
        makeSound(): void{
            console.log(`${this.name} is saying ${this.sound}`);
        }

    }

    const dog1 = new Animal("Tiger Dog", 'dog', 'ghew ghew');
    
    dog1.makeSound();
    


//by using parameter properties

    class Animal2  {

        //parameter properties

        constructor(public name: string, public specifies: string, public sound: string
        ){}

        makeSound(): void{
            console.log(`${this.name} is saying ${this.sound}`);
        }

    }

    const dog2 = new Animal("Tiger Dog", 'dog', 'ghew ghew');
    
    dog2.makeSound();
    
    
    
    
    
    
    //
}