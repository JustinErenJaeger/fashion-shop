let removeCartItemsBtn = document.getElementsByClassName("btn-remove")
for (var i = 0; i < removeCartItemsBtn.length; i++) {
    let btn = removeCartItemsBtn[i]
    btn.addEventListener("click", removeCartItem)
}

let addToCartBtn = document.getElementsByClassName("shop-btn")
for (var i = 0; i < addToCartBtn.length; i++) {
    let btn = addToCartBtn[i]
    btn.addEventListener("click", addToCartBtn)
}

function removeCartItem(event) {
    let btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove()
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    let cartItems = document.getElementsByClassName("cart-items")[0]
    cartRowContents =`
    <div class="item">
        <div class="img">
            <img src="" alt="" id="image-1">
        </div>
        <div class="info">
            <p class="title">Jacket</p>
            <p class="cart-price">R20</p>
            <button class="btn-remove">REMOVE</button>
        </div>
    </div>`
    cartRow.innerText = title
    cartItems.append(cartRow)
}




