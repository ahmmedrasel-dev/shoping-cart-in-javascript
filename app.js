
// Update Product Qty 
function updateProductQty(product, price, isIncrease) {
  const productInputValue = document.getElementById(product + '-qty');
  let productQty = productInputValue.value;
  if (isIncrease) {
    productQty = parseInt(productQty) + 1;
  } else if (productQty > 0) {
    productQty = parseInt(productQty) - 1;
  }
  productInputValue.value = productQty
  // Update Product Price
  const productPrice = document.getElementById(product + '-price');
  productPrice.innerText = productQty * price;

  // Update Subtotal 
  calculateTotal();
}

function getProductQty(product) {
  const productInputValue = document.getElementById(product + '-qty');
  let productQty = parseInt(productInputValue.value);
  return productQty;
}

// Calculate Total Price;
function calculateTotal() {
  const phoneTotalPrice = getProductQty('phone') * 2119;
  const caseTotalPrice = getProductQty('case') * 59;
  const subtotal = phoneTotalPrice + caseTotalPrice;
  const taxAmount = subtotal / 10;
  const total = subtotal + taxAmount;
  // Update on the html
  document.getElementById('sub-total').innerText = subtotal;
  document.getElementById('tax').innerText = taxAmount;
  document.getElementById('total').innerText = total;
}


// Event Handel
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProductQty('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
  updateProductQty('phone', 1219, false);
})

document.getElementById('case-plus').addEventListener('click', function () {
  updateProductQty('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
  updateProductQty('case', 59, false);
})


