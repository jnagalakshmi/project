let cartSummaryHTML = "";
let cartt = JSON.parse(localStorage.getItem("cart")) || [];
let matchingProduct;
let product = JSON.parse(localStorage.getItem("products")) || [];
orderSummaryRender();
function orderSummaryRender() {
  cartt.forEach((cartItem) => {
    const productId = cartItem.productId;
    matchingProduct = "";

    product.forEach((product) => {
      if (product.id == productId) {
        matchingProduct = product;
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
                    <h3 class="product-price">$ ${matchingProduct.priceCents}</h3>
                    </div>
                    <div class="button-delete">
                    <button class="text-danger" data-quant-ty="${cartItem.quantity}" onclick=" window.location.href='cart.html';"   data-product-id=${matchingProduct.id} ><i class="fas fa-trash fa-lg " ></i></button>
                    </div>
                </div>
                </div>
            </div>`;
  });
  orderSummary();
}
console.log(cartSummaryHTML);
document.querySelector(".products").innerHTML = cartSummaryHTML;

document.querySelectorAll(".text-danger").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.card1-${productId}`);
    container.remove();
  });
  orderSummaryRender();
});

if (!cartSummaryHTML) {
  document.querySelector(".head").innerHTML = "You cart is Empty";
}

function getProductId(pid) {
  let matchingProduct;
  product.forEach((product) => {
    console.log(product.id);
    console.log(pid);
    if (product.id == pid) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

function orderSummary() {
  let Tprice = 0;
  let ShippingPrice = 0;
  let TaxPrice = 0;
  let Tax = 0;
  cartt.forEach((cartItem) => {
    const product = getProductId(cartItem.productId);
    Tprice += product.priceCents * cartItem.quantity;
  });
  if (Tprice >= 1000 || Tprice == 0) {
    ShippingPrice = 0;
  } else {
    ShippingPrice = 100;
  }
  if (Tprice <= 500) {
    TaxPrice = 0;
  } else {
    TaxPrice = Tprice * 0.1;
    Tax = 10;
  }

  TotalCost = Tprice + ShippingPrice + TaxPrice;

  const paymentSummaryHtml = `
        <div class="payment-summary-title" >
                            Order Summary
                        </div>
                    <div class="summary-details">
                        <div class="payment-summary-row">
                            <div>Items Cost :</div>
                            <div class="payment-summary-money">${Tprice}</div>
                        </div>
                
                        <div class="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div class="payment-summary-money">${ShippingPrice}</div>
                        </div>
                
                        <div class="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div class="payment-summary-money">${TaxPrice}</div>
                        </div>
                
                        <div class="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div class="payment-summary-money">${Tax} %</div>
                        </div>
                
                        <div class="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div class="payment-summary-money">${TotalCost}</div>
                        </div>
                            <div class="payment-method-options">
                              <input type="radio" id="cash-on-delivery" name="paymentMethod" value="cash-on-delivery" checked>
                              <label for="cash-on-delivery">Cash On Delivery</label><br>
                              <input type="radio" id="online-payment" name="paymentMethod" value="online-payment">
                              <label for="online-payment">Online Payment</label><br>
                            </div>
                    </div>
                        <button class="place-order-button button-primary" onclick='orderList()'>
                            Place your order
                          </button>
            `;
  document.querySelector(".order-summary").innerHTML = paymentSummaryHtml;
}

let orders = [];
console.log(orders);
window.onload = function () {
  const storedOrders = localStorage.getItem("orders");
  if (storedOrders) {
    orders = JSON.parse(storedOrders);
  } else {
    orders = []; // Initialize an empty array if nothing is stored
  }
};

function orderList() {
  let matchingProduct;
  let neworder = [];
  cartt.forEach((cartItem) => {
    const productId = cartItem.productId;
    console.log(productId);
    product.forEach((product) => {
      console.log(product.id);
      if (product.id == productId) {
        matchingProduct = product;
      }
    });
    const name = matchingProduct.name;
    const image = matchingProduct.image;
    const quantity = cartItem.quantity;
    const id = matchingProduct.id;

    neworder.push({
      id: id,
      name: name,
      image: image,
      quantity: quantity,
    });
  });
  orders.unshift(neworder);
  console.log(orders);
  localStorage.setItem("orders", JSON.stringify(orders));
  window.location.href = 'orders.html';
}
