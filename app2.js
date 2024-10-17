// array methods
// reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum1 = numbers.reduce((prev, currentValue) => prev + currentValue, 0);
// console.log(sum);

function sumAccumulator(prev, currentValue) {
    console.log('currentValue', currentValue);
    console.log('prev', prev);
    return prev + currentValue;
}

const sum2 = numbers.reduce(sumAccumulator, 0);
console.log(sum2);

const sum3 = numbers.reduce((prev, currentValue) => {
    return prev + currentValue
}, 0);

const studentsScores = [
    {
        name: 'Jamal',
        score: 70,
    },
    {
        name: 'Bayo',
        score: 90,
    },
    {
        name: 'Muhammed',
        score: 100,
    }
]

const studentsScoresSum = studentsScores.reduce((prev, currentValue) => {
    return prev + currentValue.score;
}, 0);

console.log(studentsScoresSum);

// sum students results
const students = [
    {
        name: 'Jamal',
        score: 0,
        courses: [{
            name: 'Html',
            score: 50,
        },
        {
            name: 'css',
            score: 60,
        },
        {
            name: 'JavaScript',
            score: 90,
        }
        ]
    },
    {
        name: 'Bayo',
        score: 0,
        courses: [{
            name: 'Html',
            score: 50,
        },
        {
            name: 'css',
            score: 60,
        },
        {
            name: 'JavaScript',
            score: 90,
        }
        ]
    },
    {
        name: 'Muhammed',
        score: 0,
        courses: [{
            name: 'Html',
            score: 50,
        },
        {
            name: 'css',
            score: 60,
        },
        {
            name: 'JavaScript',
            score: 90,
        }
        ]
    }
]

const result = students.reduce((prev, currentStudent) => {
    console.log('currentValue', currentStudent);
    console.log('prev', prev);
    currentStudent.score = currentStudent.courses.reduce((prev, currentCourse) => {
        return prev + currentCourse.score;
    }, 0);
    return prev + currentStudent.score;
}, 0);

console.log('the students results score is: ', result);
