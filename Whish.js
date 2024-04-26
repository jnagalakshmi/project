let cartSummaryHTML = "";
let Whish = JSON.parse(localStorage.getItem("Whishcart")) || [];
console.log(Whish);
let product = JSON.parse(localStorage.getItem("products")) || [];
console.log(product);
OrderSummaryRender();
function OrderSummaryRender() {
  Whish.forEach((cartItem) => {
    const productId = cartItem.productId;
    console.log(productId);
    let matchingProduct;

    product.forEach((product) => {
      console.log(product.id);
      if (product.id == productId) {
        matchingProduct = product;
        console.log(matchingProduct);
      }
    });
    cartSummaryHTML += `
  <div class="card card1-${matchingProduct.id}">
                <div class="card-body p-4">
                    <div class="card1">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                    <img
                        src=${matchingProduct.image}
                        class="img" alt="Cotton T-shirt">
                    </div>
                    <div class="name">
                    <p class="name">${matchingProduct.name}</p>
                   
                    </div>
                    <div class="quantity">
                    <p >Quantity</p>
                    <p class="quantity-no">${cartItem.quantity}</p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h3 class="product-price"><i class="fa-solid fa-indian-rupee-sign"></i> ${matchingProduct.priceCents}</h3>
                    </div>
                    <div class="button-delete">
                    <button class="text-danger" data-quant-ty="${cartItem.quantity}" onclick=" window.location.href='Wishlist.html';"   data-product-id=${matchingProduct.id} ><i class="fas fa-trash fa-lg " ></i></button>
                    </div>
                </div>
                </div>
            </div>`;
  });
  orderSummary();
}

if (!cartSummaryHTML) {
  document.querySelector(".head").innerHTML = "You Wish List is Empty";
}

document.querySelector(".products").innerHTML = cartSummaryHTML;

document.querySelectorAll(".text-danger").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.card1-${productId}`);
    container.remove();
  });
  OrderSummaryRender();
});

function getProductId(pid) {
  let matchingProduct;

  product.forEach((product) => {
    if (product.id == pid) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

function orderSummary() {
  let Tprice = 0;
  let quant = 0;
  Whish.forEach((cartItem) => {
    const product = getProductId(cartItem.productId);
    Tprice += product.priceCents * cartItem.quantity;
    quant += cartItem.quantity;
  });

  const paymentSummaryHtml = `
        <div class="payment-summary-title" >
                            Items  Summary
                        </div>
                    <div class="summary-details">
                        <div class="payment-summary-row">
                            <div>Items  </div>
                            <div class="payment-summary-money" style="margin-bottom : 20px;">${quant}</div>
                        </div>
                
                        <div class="payment-summary-row" >
                            <div>Total Cost</div>
                            <div class="payment-summary-money">${Tprice}</div>
                        </div>
                        <button class="move-to-cart" onclick='addWishlistToCart()'>
                            Move to Cart
                          </button>
            `;
  document.querySelector(".order-summary").innerHTML = paymentSummaryHtml;
}

function addWishlistToCart() {
 // Retrieve the current cart and wishlist from local storage
 let cartt = JSON.parse(localStorage.getItem("cart")) || [];
 let Whish = JSON.parse(localStorage.getItem("Whishcart")) || [];

 // Iterate over each item in the wishlist
 Whish.forEach(wishItem => {
    // Check if the item is already in the cart
if (Whish.length === 0) {
    // Display a message indicating that there are no items to add
    alert("Your wishlist is empty. There are no items to add to the car.");
    return; // Exit the function early
 }
   
    const existingCartItem = cartt.find(cartItem => cartItem.productId === wishItem.productId);
   

    if (existingCartItem) {
      // If the item is already in the cart, increase its quantity
      existingCartItem.quantity += wishItem.quantity;
    } else {
      // If the item is not in the cart, add it
      cartt.push({
        productId: wishItem.productId,
        quantity: wishItem.quantity
      });
    }
 });

 // Update the local storage with the new cart array
 localStorage.setItem("cart", JSON.stringify(cartt));

 // Optionally, clear the wishlist after adding items to the cart
 localStorage.setItem("Whishcart", JSON.stringify([]));

 // Optionally, refresh the page or update the UI to reflect the changes
 window.location.href = 'cart.html';
}
