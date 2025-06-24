import { products } from "business_logic.js";
const names = products.map(p => p.name);
console.log("Names:", names);
const premiumInStock = products.filter(p => p.inStock && p.price > 2000);
console.table(premiumInStock);
const totalValue = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total ₹", totalValue.toLocaleString());
const byCategory = products.reduce((acc, p) => {
  (acc[p.category] ||= []).push(p);
return acc;
}, {});
console.log(byCategory);