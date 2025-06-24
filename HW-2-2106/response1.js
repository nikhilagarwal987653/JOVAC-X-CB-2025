const products=[
    { id: 1, name: "Laptop", price: 72000 },
    { id: 2, name: "Mouse", price: 1200 },
    { id: 3, name: "Keyboard", price: 2400 }
];
const productContainer = document.getElementById("products");
const cartList = document.getElementById("cart-list");
const totalDisplay = document.getElementById("total");
let cart = [];
let total = 0;
function renderProducts() {
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="handleAddToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(div);
    });
}  
function addToCart(productId, callback) {
    const product = products.find(p => p.id === productId);
    setTimeout(() => callback(product), 300); // simulate async
} 
function handleAddToCart(id) {
    addToCart(id, product => {
      cart.push(product);
      total += product.price;
      updateCart();
    });
}
function updateCart() {
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${item.name} - ₹${item.price}`;
      cartList.appendChild(li);
    });
    totalDisplay.textContent = total;
}
renderProducts();
  