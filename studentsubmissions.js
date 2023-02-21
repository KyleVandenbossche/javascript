// #1
const studentSubmissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true},
];


// // #2
// function addSubmission(array, newName, newScore, newDate) {
//     let submission = { name: newName, score: newScore, date: newDate, passed: newScore >=60 };
//     array.push(submission);
//     return submission;

//     // cleaner way to write this
//     // // array.push({
//     //     name: newName,
//     //     score: newScore,
//     //     date: newDate,
//     //     passed: newScore >= 60
//     // })

// }

// console.log(addSubmission(studentSubmissions, 'Kyle', 100, '03-19-2023'));

// // index : 0, 1, 2, 3, 4, 5
// // // #3
// function deleteSubmissionByIndex(array, index){
//     array.splice(index, 1) // 1 entry, you can use any number here for quantity
// }

// deleteSubmissionByIndex(studentSubmissions, 2);




// // #4 
// function deleteSubmissionByName(array, name){
    
//     const index = array.findIndex(studentSubmissions => studentSubmissions.name === name);

//     deleteSubmissionByIndex(array, index)

// }

// console.log(studentSubmissions)
// deleteSubmissionByName(studentSubmissions, 'Jack');
// console.log(studentSubmissions)


// #5

// function editSubmission(array, index, score) {
//     const submission = array[index];
//     array[index].score = score;
//     array[index].passed = score >= 60;
//   }

  function findSubmissionByName(array, name){
    const submission = array.find(submission => submission.name === name);
  }

  const found = findSubmissionByName(studentsubmissions, 'jack')
  console.log(found)


function findLowestScore(array){
    let lowest = array[0]; // assign first item in array to the lowest, because technically it's the lowest theres only 1 start
    array.forEach(studentSubmissions => {
        if (studentSubmissions.score < lowest.score){
            lowest = studentSubmissions;
        }
    });
    return lowest; 
}
console.log(findLowestScore(studentSubmissions));



function findAverageScore(array){

    let total = 0;

    for (const submission of array) {
        total = total + submission.score
    }

    return total / array.length
}

console.log(findAverageScore(studentSubmissions));


function filterPassing(array){
    return array.filter(studentSubmissions => studentSubmissions.passed === true)
}

console.log(filterPassing(studentSubmissions));


function filter90AndAbove(array){
    return array.filter(studentSubmissions => studentSubmissions.score >= 90);
}

console.log(filter90AndAbove(studentSubmissions));

