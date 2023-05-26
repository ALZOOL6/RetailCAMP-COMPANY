// Define a function to add a product to the cart
function addToCart(product, price) {
  // Get the current cart data from local storage
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if the product is already in the cart
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].product === product) {
      cart[i].quantity++;
      found = true;
      break;
    }
  }
  
  // If the product is not in the cart, add it
  if (!found) {
    cart.push({product: product, price: price, quantity: 1});
  }
  
  // Save the updated cart data to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Update the shopping cart page
  updateCartPage();
}

// Define a function to remove a product from the cart
function removeFromCart(product) {
  // Get the current cart data from local storage
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Remove the product from the cart
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].product === product) {
      cart.splice(i, 1);
      break;
    }
  }
  
  // Save the updated cart data to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Update the shopping cart page
  updateCartPage();
}

// Define a function to update the shopping cart page
function updateCartPage() {
  // Get the current cart data from local storage
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Get the table body element
  var tbody = document.querySelector('table tbody');
  
  // Clear the table body
  tbody.innerHTML = '';
  
  // Loop through the cart items and add them to the table
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    nameCell.textContent = item.product;
    row.appendChild(nameCell);
    var priceCell = document.createElement('td');
    priceCell.textContent = '$' + item.price.toFixed(2);
    row.appendChild(priceCell);
    var quantityCell = document.createElement('td');
    quantityCell.textContent = item.quantity;
    row.appendChild(quantityCell);
    var subtotalCell = document.createElement('td');
    var subtotal = item.price * item.quantity;
    subtotalCell.textContent = '$' + subtotal.toFixed(2);
    row.appendChild(subtotalCell);
    tbody.appendChild(row);
    total += subtotal;
  }
  
  // Update the total price
  var totalCell = document.querySelector('table tfoot td:last-child');
  totalCell.textContent = '$' + total.toFixed(2);
}





