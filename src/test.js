// console.log("This is a test file.")


// const customer = [
//     {id: 1, name: "Ade Micheal", balance: 3000},
//     {id: 2, name: "Tolu Micheal", balance: 5000},
//     {id: 3, name: "Sola Micheal", balance: 2000},
// ];


const friends = ["Ade", "Bola"];
// create 
friends.push("Sola")
friends.push("Tolu")

// update
friends[2] = "Bimpe"

// delete
// friends.pop();
// friends.pop(1);


// console.log(friends)



// Bank

const customers = [
    { id: 1, name: "Ade Micheal", balance: 3000 },
    { id: 2, name: "Tolu Micheal", balance: 5000 },
    { id: 3, name: "Sola Micheal", balance: 2000 },
];

// add an element - create in crud operation
customers.push({
    id: 4,
    name: "Bimpe Micheal",
    balance: 4000
});

// update an element - update in crud operation
customers.map((data, index) => {
    if (data.id === 2) {
        data.name = "Tolu Gabriel"
    }
    return data;
})

// filter an element - delete in crud operation 

const newCustomers = customers.filter((data) => {
    return data.id != 3;
});

console.log(newCustomers);

// console.log(customers);