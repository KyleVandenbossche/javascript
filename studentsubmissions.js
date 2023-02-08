// #1
const studentSubmissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true},
];





// #2
function addSubmission(array, newName, newScore, newDate) {
    let submission = { name: newName, score: newScore, date: newDate };
    array.push(submission);
}

console.log(addSubmission(studentSubmissions, 'Kyle', 100, '03-19-2023'));


// #3
function deleteSubmissionByIndex(array, index){
//     // Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
// Functionality: remove an object from the array at the specified index using the splice method.
// 
}




// #4 
function deleteSubmissionByName(array, index){
//     Declare a function named deleteSubmissionByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.


}

// #5

function editSubmission(array, index, score) {
    array[index].score = score;
    return array;
  }

function findSubmissionByName(array, name){
    return array.find((item)=> item.name === name);
/*
    for (let item of array){
        if(item.name === name){     // this is the same code
            return item;            // this is the same code
        }
        
    }
    return "Student not Found";*/
}

console.log(findSubmissionByName(studentSubmissions, "Jane"))