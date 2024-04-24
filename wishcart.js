let Whishcart = JSON.parse(localStorage.getItem("Whishcart"));
console.log("vamsi");
if (!Whishcart) {
  Whishcart = [
    {
      productId: "22",
      quantity: 1,
    },
  ];
}

function saveToStoragee() {
  localStorage.setItem("Whishcart", JSON.stringify(Whishcart));
}

function addToWish(productId) {
  let matchingItem;
  Whishcart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    Whishcart.push({
      productId: productId,
      quantity: 1,
    });
  }
  saveToStoragee();
}

function removeFromCart(productId) {
  const newCart = [];
  console.log(productId);
  console.log(Whishcart);
  Whishcart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  Whishcart = newCart;
  saveToStoragee();
}
