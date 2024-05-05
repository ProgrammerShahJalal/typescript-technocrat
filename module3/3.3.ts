{
    //
    
    //type guards
    // typeof ==> type guard

    type AlphaNumeric= number| string;

    const add = (param1:AlphaNumeric, param2:AlphaNumeric) : AlphaNumeric => {
        if(typeof param1 === "number" && typeof param2 ==="number"){
            return  param1 + param2;
         }else{
            return param1.toString() + param2.toString();
        }
    }

    console.log(add(3, "4"));



    // in guards
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser)=>{
        if('role' in user){
           console.log(`Hello ${user.name}, you are an admin.`) ;
        } else {
            console.log(`Hello ${user.name}`) 
        }
    }

    const normalVai:NormalUser = {
        name:"John Doe",
    }
    getUser(normalVai);

    const adminVai : AdminUser = {
        name: 'Jane Smith',
        role:'admin'
    }
    getUser(adminVai);
    
    
    
    
    
    
    
    //
}