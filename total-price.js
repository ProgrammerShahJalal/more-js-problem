const products = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 3 },
    { name: 'watch', price: 3680, quantity: 2 }
];

let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);