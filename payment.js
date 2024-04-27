let cartt = JSON.parse(localStorage.getItem("cart")) || [];

let product = JSON.parse(localStorage.getItem("products")) || [];

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    window.location.href = "orders.html"; // Redirect to orders.html
  });

document.getElementById("upi").addEventListener("change", function () {
  document.getElementById("upi-qr").style.display = "block";
  document.getElementById("card-details").style.display = "none";
});

document.getElementById("card").addEventListener("change", function () {
  document.getElementById("upi-qr").style.display = "none";
  document.getElementById("card-details").style.display = "block";
});

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

  localStorage.setItem("cart", JSON.stringify([]));
  window.location.href = "orders.html";
}
