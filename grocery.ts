class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

const groceries = [
    new Grocery('Milk', 3, 5.99),
    new Grocery('Bread', 6, 2.36),
    new Grocery('Eggs', 11, 8.56),
    new Grocery('Cream Cheese', 24, 2.99),
    new Grocery('Chicken Breast', 10, 15.67),
    new Grocery('Green Beans', 39, 3.23)
];

groceries.forEach(item => {
    console.log(`Item: ${item.name}`);
    console.log(`Quantity: ${item.quantity}`);
    console.log(`Price: ${item.price}`);
});

function displayGroceries() {
    const groceryList = document.getElementById('grocery-list');

    groceries.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}`;
        groceryList?.appendChild(listItem);
    });
}

window.addEventListener('load', displayGroceries);

