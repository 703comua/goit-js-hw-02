// function getSlice(array, value) {
//   let index = array.indexOf(value);
//   if (index >= 0) {
//     const end = index + 1;
//     return array.slice(0, end);
//   } else {
//     return [];
//   }
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // повертає `["Mango", "Poly"]`
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); // повертає `["Mango"]`
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); // повертає `["Mango", "Poly", "Ajax"]`
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); // повертає `[]

// =================================================

// function calculateTotalPrice(order) {
//   let sum = 0

//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }

//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає `138`
// console.log(calculateTotalPrice([164, 48, 291])); // повертає `503`
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає `1116`

// ===================================================

// function checkStorage(storage, item) {
//   const storageToLower = storage;
//   const itemToLower = item.toLowerCase();
//   if (storageToLower.includes(itemToLower)) {
//     return `${itemToLower} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); // "plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM')); // "plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear')); // "pear is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); // "pear is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange')); // "Sorry! We are out of stock!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); // "Sorry! We are out of stock!"

// ===================================================
