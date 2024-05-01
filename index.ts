let course = 'Next level web development course'
const students = ['John', 'Jane',
'Peter', 'Paul']
let index = 0;
function nextStudent() {
    if (index >= students.length) return console.log('The course is complete!')
    else console.log(`Today we study ${students[index]} in the ${course}`)
    index++
    setTimeout(nextStudent, 2 * 1000)
}