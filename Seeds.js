let productsHTML = "";
let product = JSON.parse(localStorage.getItem("products"));
updateCartQuantity();
updateWishQuantity();
product.forEach((product) => {
  if (product.category === "Seeds") {
    productsHTML += `
  <div class="product-box">
  <img alt="oranges" src=${product.image}>
  <strong>${product.name}</strong>
  <span class="quantity">${product.kg} KG</span>
  <span class="price">Rs. ${product.priceCents}</span>
  <!--cart-btn------->
  <button class="cart-btn" data-product-name=${product.id}>
      <i class="fas fa-shopping-bag"></i> Add to Cart
  </button>
  <!--like-btn------->
  <button class="like-btn" style = 'text-decoration: none;'  data-like-name=${product.id}>
      <i class="far fa-heart"></i>
  </button>
</div>
  `;
  }
});
document.querySelector(".js-product").innerHTML = productsHTML;
const productContainer = document.querySelector(".product-container");

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    console.log(cartQuantity);
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

function updateWishQuantity() {
  let cartQuantity = 0;

  Whishcart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-wish-quantity").innerHTML = cartQuantity;
}

productContainer.addEventListener("click", (eventt) => {
  // Check if the clicked element is a cart-btn
  if (eventt.target.classList.contains("like-btn")) {
    console.log("vamsi");
    // Get the product id from the data attribute
    const productId = eventt.target.dataset.likeName;
    // Call the addToCart function with the product id
    addToWish(productId);
    // Call the updateCartQuantity function
    updateWishQuantity();
  }
});
productContainer.addEventListener("click", (event) => {
  // Check if the clicked element is a cart-btn
  if (event.target.classList.contains("cart-btn")) {
    // Get the product id from the data attribute
    const productId = event.target.dataset.productName;
    // Call the addToCart function with the product id
    addToCart(productId);
    // Call the updateCartQuantity function
    updateCartQuantity();
  }
});
