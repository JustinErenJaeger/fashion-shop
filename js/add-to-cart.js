if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

function ready() {
  let quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener("change", quantityChanged)
  }

  let addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener("click", addToCartClicked)
  }

  let removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let btn = removeCartItemButtons[i]
    btn.addEventListener("click", removeCartItem)
  }

  document.getElementsByClassName("btn-purchase")[0].addEventListener("click", purchaseClicked)
}

function purchaseClicked() {
  alert("thank you for your purchase")
  let cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function quantityChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement
  let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
  let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
  let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
  console.log(title, price, imageSrc)
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  cartRow = document.createElement("div")
  cartRow.classList.add("cart-row")
  let cartItems = document.getElementsByClassName("cart-items")[0]
  let cartItemNames = cartItems.getElementsByClassName("cart-item-title")
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText ==title) {
      alert("this item has already been added to the cart")
      return
    }
  }
  let cartRowContents = `
  <div class="cart-item">
      <img src="${imageSrc}" alt="" class="shop-item-image">
  </div>
  <div class="information">
      <p class="cart-item-title">${title}</p>
      <p class="cart-price">${price}</p>
  </div>
  <div class="cart-quantity">
      <input type="number" name="" value="1" class="cart-quantity-input">
      <button class="btn-danger" type="button">REMOVE</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener("click", removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener("change", quantityChanged)
  alert("Item has been added to the cart!")
}

function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0]
  let cartRows = cartItemContainer.getElementsByClassName("cart-row")
  let total = 0
  for (let i = 0; i <cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName('cart-price')[0]
    let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    let price = parseFloat(priceElement.innerText.replace("R", ""))
    let quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName("cart-total-price")[0].innerText = "R" + total
}
