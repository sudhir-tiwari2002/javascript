const users = {
    name: 'Name1',
    age: 34,
    friends: [{
        name: 'Name1',
        age: 24
    }, {
        name: 'Name 2',
        age: 67
    }],
    relatives: {
        mom: {
            age: 23,
            name: 'Mom'
        },
        uncle: {
            age: 22,
            name: 'Uncle'
        }
    }
}
function calculateTotalAge(user) {
    let totalAge = user.age;

    user.friends.forEach(friend => {
        totalAge += friend.age;
    });

    for (const relative in user.relatives) {
        totalAge += user.relatives[relative].age;
    }

    return totalAge;
}

const totalAge = calculateTotalAge(users);
console.log("Total Age:", totalAge);

