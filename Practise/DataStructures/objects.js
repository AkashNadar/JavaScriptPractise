const person = {
    firstName: 'Akash',
    age: 21,
    hobbies: ['Sprots', 'Cooking'],
    age: 32, 
    greet: () => {
        console.log(`Hii brother ${person.firstName}`);
    },
};

console.log(person.firstName);
person.greet();