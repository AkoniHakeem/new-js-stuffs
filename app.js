// object
const firstname = 'Jamal';
const lastname = 'Adeleye';
const age = 20;
const isMarried = false;
const address = 'Lagos';
const skill1 = 'HTML';
const skill2 = 'CSS';
const skill3 = 'JavaScript';

let person = {};

// TODO: write a function that takes an object and logs it content
console.log("this is an empty person object", person);

person = {
    firstname: 'Jamal',
    lastname: 'Adeleye',
    age: 20,
    isMarried: false,
    address: 'Lagos',
    skill1: 'HTML',
    skill2: 'CSS',
    skill3: 'JavaScript',
    logPerson: function () {
        console.log(`This is the person's firstname: ${this.firstname}`);
    },
}


// person.logPerson();

console.log(person);
console.log(`This is the person's lastname: ${person.firstname}`);
console.log(`The person's lastname teletele is: ${person['lastname']}`);
person.lastname = 'Oyelami';
person.favorite = 'Obe ila ati eran pupo pelu ede plus eba.';
console.log(`The person's lastname is: ${person.lastname}`);
console.log(person.favorite);
console.log('accessing object field with bracket notation', person['lastname']);
person.logPerson();

// person = [
//     'Jamal',
//     'Adeleye',
//     20,
//     false,
//     'Lagos',
//     address,
//     'Html',
//     'css',
//     'JavaScript'
// ]

// console.log(person);

// console.log("this is the value at index 0", person[0]);
// console.log("this is the value at index 1", person[1]);
// console.log("this is the value at index 2", person[2]);
// console.log("this is the value at index 3", person[3]);
// console.log("this is the value at index 4", person[4]);
// console.log("this is the value at index 5", person[5]);
// console.log("this is the value at index 6", person[6]);
// console.log("this is the value at index 7", person[7]);
// console.log("this is the value at index 8", person[8]);

function getObjeKeyValue(key) {
    console.log(`this is the value at key ${key}`, person[key]);
    if (typeof person[key] === 'function') {
        person[key]();
    }
}

const personAttributesArray = Object.values(person);

console.log(personAttributesArray);

const arrayOfFood = ['rice', 'beans', 'yam', 'egusi', 'plantain'];
console.log("this is the first food item: ", arrayOfFood[0]);
for (const food of arrayOfFood) {
    console.log("the current food menu item is: ", food);
}

console.log(person);
const personAttributesArray2 = Object.keys(person);
console.log("these are the keys in the object: ", personAttributesArray2);
// getObjeKeyValue('firstname');
for (const key of personAttributesArray2) {
    getObjeKeyValue(key);
}

console.log("typeof personAttributesArray2", typeof personAttributesArray2);
// arrays are like objecs
// const arrayLike = {
//     0: 'firstname',
//     1: 'lastname',
//     2: 'age',
//     3: 'isMarried',
//     4: 'address',
//     5: 'skill1',
//     6: 'skill2',
//     7: 'skill3',
//     8: 'logPerson',
//     length: 8,
//     [Symbol.iterator]() {
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < this.length) {
//                     return {
//                         value: this[index++],
//                         done: false
//                     }
//                 }
//                 return {
//                     value: undefined,
//                     done: true
//                 }
//             }
//         }
//     }
// }

// for (const key of arrayLike) {
//     console.log('this is coming from array like: ', key);
// }


// array functions/method
const foodArray2 = ['jollof-rice', 'beans and corn', 'yam', 'egusi', 'plantain'];
// map as an array function/ method
const arrowFunction = (input, index) => {
    return `menu item ${index} ${input}`;
}
const foodArrayTransform = foodArray2.map(arrowFunction);
console.log(foodArrayTransform);

const foodArrayTransform2 = foodArray2.map((input, index) => {
    return `menu item ${index} ${input}`;
});
console.log(foodArrayTransform2);

// filter as an array function/ method




