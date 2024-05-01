{

// Spread Opetator, Rest operator and destructuring


// learn spread operator

const bros1 : string[] = ['John', 'Jane', 'Peter']
const bros2 = [...bros1, 'Paul'] // using spread operator to add new item in array


// learn  rest operator `

const greetFriends = (...friends:string[]) =>{
    friends.forEach((friend => `Hello ${friend}!`))
}

}
