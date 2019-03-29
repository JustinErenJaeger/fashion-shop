// if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", ready)
// } else {
//     ready()
// }

let removeCartItemBtn = document.getElementsByClassName("btn-remove");
for (let i = 0; i < removeCartItemBtn.length; i++) {
    let btn = removeCartItemBtn[i];
    btn.addEventListener("click", removeCartItem);
}

let addToCartBtn = document.getElementsByClassName("shop-btn");
for (let i = 0; i < addToCartBtn.length; i++) {
    let btn = addToCartBtn[i];
    btn.addEventListener('click', addToCartClicked);
};

// document.getElementsByClassName("btn-purchase")[0].addEventListener("click", purchaseClicked)


// function purchaseClicked() {
//     alert("Thank you for Purchasing")
//     let cartItems = document.getElementsByClassName("cart")[0]
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     updateCartTotal()
// }

function removeCartItem(event) {
    let btnClicked = event.target;
        btnClicked.parentElement.parentElement.remove();
        updateCartTotal();
}

function addToCartClicked(event) {
    let btn = event.target;
    let shopItem = btn.parentElement.parentElement;
    let title = shopItem.getElementsByClassName("title")[0].innerText;
    let price = shopItem.getElementsByClassName("price")[0].innerText;
    let imageSrc = shopItem.getElementsByClassName("image").src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
        cartItems = document.getElementsByClassName("cart")[0];
        cartItemNames = cartItems.getElementsByClassName("title");
        for (let i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert("This item has already been added to the cart");
                return;
            }
        }
    let cartRowContents = `
    <div>
        <div>
            <img src="${imageSrc}" alt="">
        </div>
        <div class="cart-info">
            <p>${title}</p>
            <p>${price}</p>
            <button class="btn-remove">REMOVE</button>
        </div>
    </div>`
    cartRow.innerText = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("btn-remove")[0].addEventListener("click", removeCartItem)
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName("cart")[0]
    let cartRows = cartItemContainer.getElementsByClassName("cart-item")
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName("cart-price")[0]
        let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
        let price = parseFloat(priceElement.innerText.replace("$", ""))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }

    // total = Math.round(total * 100) / 100
    // document.getElementsByTagName("cart-total-price")[0].innerText = "$" + total
}
