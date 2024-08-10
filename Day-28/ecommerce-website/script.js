const products = [
  {
      "name": "Portable Charger",
      "price": 29.99,
      "description": "High-capacity portable charger with fast charging capabilities and multiple USB ports.",
      "image": "img/portable_charger.jpg"
  },
  {
      "name": "Fitness Tracker",
      "price": 59.99,
      "description": "Fitness tracker with step counting, sleep monitoring, and heart rate tracking features.",
      "image": "img/fitness_tracker.jpg"
  },
  {
      "name": "Electric Toothbrush",
      "price": 39.99,
      "description": "Rechargeable electric toothbrush with multiple brushing modes and a two-week battery life.",
      "image": "img/electric_toothbrush.jpg"
  },
  {
      "name": "Wireless Headphones",
      "price": 89.99,
      "description": "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
      "image": "img/wireless_headphones.jpg"
  },
  {
      "name": "Smart Watch",
      "price": 199.99,
      "description": "Advanced smart watch with heart rate monitoring, GPS, and customizable watch faces.",
      "image": "img/smart_watch.jpg"
  },
  {
      "name": "4K Ultra HD TV",
      "price": 499.99,
      "description": "55-inch 4K Ultra HD TV with smart features and high dynamic range (HDR) support.",
      "image": "img/4k_tv.jpg"
  },
  {
      "name": "Bluetooth Speaker",
      "price": 49.99,
      "description": "Portable Bluetooth speaker with deep bass and up to 12 hours of playtime.",
      "image": "img/bluetooth_speaker.jpg"
  },
  {
      "name": "Gaming Laptop",
      "price": 1299.99,
      "description": "High-performance gaming laptop with a powerful GPU, fast processor, and 16GB RAM.",
      "image": "img/gaming_laptop.jpg"
  }
];

let cart = [];

function displayProducts() {
  const productsContainer = document.querySelector('.products');
  productsContainer.innerHTML = '';

  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">$${product.price}</p>
          <button class="add-to-cart">Add to Cart</button>
      `;

      productsContainer.appendChild(productCard);
  });

  document.querySelectorAll('.add-to-cart').forEach((button, index) => {
      button.addEventListener('click', () => addToCart(products[index]));
  });
}

function addToCart(product) {
  const productInCart = cart.find(item => item.name === product.name);

  if (productInCart) {
      productInCart.quantity += 1;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach(product => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      cartItem.innerHTML = `
          <h4>${product.name}</h4>
          <p>$${product.price} x ${product.quantity}</p>
          <button class="decrease-qty">-</button>
          <button class="increase-qty">+</button>
          <button class="remove-item">Remove</button>
      `;

      cartItemsContainer.appendChild(cartItem);

      cartItem.querySelector('.decrease-qty').addEventListener('click', () => decreaseQuantity(product.name));
      cartItem.querySelector('.increase-qty').addEventListener('click', () => increaseQuantity(product.name));
      cartItem.querySelector('.remove-item').addEventListener('click', () => removeFromCart(product.name));
  });
}

function decreaseQuantity(productName) {
  const productInCart = cart.find(item => item.name === productName);

  if (productInCart.quantity > 1) {
      productInCart.quantity -= 1;
  } else {
      removeFromCart(productName);
  }

  updateCart();
}

function increaseQuantity(productName) {
  const productInCart = cart.find(item => item.name === productName);
  productInCart.quantity += 1;

  updateCart();
}

function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  updateCart();
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const payment = document.getElementById('payment').value;

  if (name && address && payment) {
      displayOrderConfirmation(name, address, payment);
      cart = [];
      updateCart();
  } else {
      alert("Please fill out all fields");
  }
});

function displayOrderConfirmation(name, address, payment) {
  const orderConfirmation = document.getElementById('order-confirmation');
  orderConfirmation.innerHTML = `
      <h4>Thank you for your order, ${name}!</h4>
      <p>Your items will be shipped to:</p>
      <p>${address}</p>
      <p>Payment method: ${payment}</p>
  `;
  orderConfirmation.classList.remove('hidden');
}

displayProducts();
