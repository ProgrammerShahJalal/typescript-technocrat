// Destructureing in Typescript

{

    const user = {
        id: 1,
        name: {
            firstName: 'Shah',
            lastName: 'Jalal',
        },
        age: 25,
        contact: "01894344124",
        adress: "Dhaka"
        
    }

    const {id, name: {firstName}, adress, contact} = user;

// array destructuring

const myFriends  = ["John", "Alice", "Bryan", "Chris", "David"];
const [,, bestFriend, ...rest]=myFriends;













}