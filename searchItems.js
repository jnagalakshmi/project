let productsHTML = "";
let bundleHTML = "";
let suggestionHTML = "";
let product = JSON.parse(localStorage.getItem("products"));
let searchinput = document.querySelector("search-input");
updateCartQuantity();
updateWishQuantity();

document.querySelector(".search-btn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  const searchInput = document.querySelector(".search-input");
  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    const searchResultElement = document.querySelector(".search-result");
    if (searchResultElement) {
      searchResultElement.textContent = `You searched for : ${query}`;
    }

    performSearch(query);
  }
});

function performSearch(query) {
  productsHTML = ``;
  product.forEach((searchItem) => {
    if (query === searchItem.name.toLowerCase()) {
      productsHTML += `
              <div class="product-box">
            
              <img alt="apple" src=${searchItem.image}>
            
              <strong>
              ${searchItem.name}
              </strong>
              <span class="quantity">${searchItem.kg} kg</span>
            
              <span class="price">Rs. ${searchItem.priceCents}</span>
              
            
              <button  class="cart-btn " data-product-name=${searchItem.id}>
            
              <i class="fas fa-shopping-bag"></i> Add to Cart
                            </button>
              <button class="like-btn"  data-like-name=${searchItem.id}>
                  <i class="far fa-heart"></i>
              </button>
            
            </div>
              `;

      suggestionHTML += `
              <div class="product-box">
            
              <img alt="apple" src=${searchItem.image}>
            
              <strong>
              ${searchItem.name}
              </strong>
              <span class="quantity">${searchItem.kg} kg</span>
            
              <span class="price">Rs. ${searchItem.priceCents}</span>
              
            
              <button  class="cart-btn" data-product-name=${searchItem.id}>
            
              <i class="fas fa-shopping-bag"></i> Add to Cart
                            </button>
              <button class="like-btn"  data-like-name=${searchItem.id}>
                  <i class="far fa-heart"></i>
              </button>
            
            </div>
              `;
      document.querySelector(".heading").innerHTML = "Search Results";
    }
  });
  if (productsHTML === "") {
    document.querySelector(".heading").innerHTML =
      "No Results Found try with different product ";
  }

  document.querySelector(".product-container").innerHTML = productsHTML;
}

const productContainer = document.querySelector(".product-container");

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

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

// Select the product-container element

// Add a click event listener to the product-container
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
