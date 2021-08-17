const phones = [
    { name: 'samaung', price: 45000, camera: 10, storage: 32 },
    { name: 'walton', price: 5000, camera: 8, storage: 16 },
    { name: 'htc', price: 50000, camera: 9, storage: 32 },
    { name: 'oppo', price: 35000, camera: 12, storage: 8 },
    { name: 'itel', price: 15000, camera: 12, storage: 16 },
];
let cheapest = phones[0];
for (const phone of phones) {
    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }

}
console.log(cheapest);