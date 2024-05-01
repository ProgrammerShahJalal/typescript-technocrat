let course : string = 'Next level web development course'
const students : string[] = ['John', 'Jane',
'Peter', 'Paul']
let index : number = 0;
function nextStudent() {
    if (index >= students.length) return console.log('The course is complete!')
    else console.log(`Today we study ${students[index]} in the ${course}`)
    index++
    setTimeout(nextStudent, 2 * 1000)
}

nextStudent()