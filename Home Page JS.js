if (!localStorage.getItem("coords")) {
  if ("geolocation" in navigator) {
    // Request permission to access location
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  let lat, lng;
  function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    const coords = { lat: lat, lng: lng };
    localStorage.setItem("coords", JSON.stringify(coords));
    // You can now use the latitude and longitude values as needed
  }
}

let productsHTML = "";
let bundleHTML = "";
let products = JSON.parse(localStorage.getItem("products"));
productsContainer();

function productsContainer() {
  products.forEach((product) => {
    productsHTML += `
  <div class="product-box">

  <img alt="apple" src=${product.image}>

  <strong>
  ${product.name}
  </strong>
  <span class="quantity">${product.kg} kg</span>

  <span class="price">Rs. ${product.priceCents}</span>
  

  <button  class="cart-btn " data-product-name=${product.id}>

  <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
  <button class="like-btn"  data-like-name=${product.id}>
      <i class="far fa-heart"></i>
  </button>

</div>
  `;
  });

  bundle.forEach((Item) => {
    bundleHTML += `
    <div class="product-box">
      <img alt="pack" src="${Item.image}">
      <strong>Big Pack</strong>
      <span class="quantity">${Item.name}</span>
      <span class="price">Rs. ${Item.priceCents}</span>
      <!--cart-btn------->
      <button class="cart-btn" data-product-name="${Item.id}">
        <i class="fas fa-shopping-bag"></i> Add to Cart
      </button>
      <!--like-btn------->
      <button class="like-btn"  data-like-name=${Item.id}>
        <i class="far fa-heart"></i>
      </button>
    </div>
  `;
  });
  updateCartQuantity();
  updateWishQuantity();
}

document.querySelector(".bundle").innerHTML = bundleHTML;
document.querySelector(".product-container").innerHTML = productsHTML;

function updateWishQuantity() {
  let cartQuantity = 0;

  Whishcart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-wish-quantity").innerHTML = cartQuantity;
}

document.querySelectorAll(".like-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.likeName;
    addToWish(productId);
    updateWishQuantity();
  });
});

function updateCartQuantity() {
  let cartQuantity = 0;
  console.log(cart);
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

document.querySelectorAll(".cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productName;
    addToCart(productId);
    updateCartQuantity();
  });
});
