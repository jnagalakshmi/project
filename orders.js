
let cartSummaryHTML = '';
let Items='';
let order = JSON.parse(localStorage.getItem('orders')) || [];
let tno = 0;
let productt = JSON.parse(localStorage.getItem('products')) || [];
let orderQuantity = 0;
orderRender();


function orderRender(){
let i=0;
let neworder=[];
 while(order.length>i){
  neworder = [];
  neworder.push(order[i]);
  console.log(neworder);
 
  quant(neworder);
  divv();
  i++;
}
}

function divv(){
  cartSummaryHTML += `
  <div class="card">
    <div class="card1">
      <div class="name">
        <p class="name">Items :</p>
        <p class="no"></p>
      </div>
      <div class="items">
      ${Items}
      
      </div>
      <div class="button-delete">
        <button class="text-danger"  onclick=" window.location.href='track.html';""    >Track your order</i></button>
      </div>
    </div>
  </div>`;
}
function quant(neworder){
  Items='';
  console.log(Items);
  neworder.forEach((Item) => {
    orderQuantity=0;
    Item.forEach((Item1) =>{
    let productId = Item1.id;
    let matchingProduct;
   productt.forEach((product) => {
    if (product.id === productId) { 
      matchingProduct = product;
    }
    });
    Items += ` 
    <div class=pro>
    <img src=${matchingProduct.image}>
    <p>${matchingProduct.name}</p>
    <p>${Item1.quantity}</p>
    </div>
    `;
  });
  
});

}


document.querySelector('.container-main').innerHTML = cartSummaryHTML;


  if(!cartSummaryHTML){
    document.querySelector('.head').innerHTML="NO Orders";
  }




