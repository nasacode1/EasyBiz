if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
function ready() {
  updateCartTotal()
  var removeItemButtons = document.getElementsByClassName('btn-light btn-round')
  for(var i = 0; i < removeItemButtons.length; i ++){
    var button = removeItemButtons[i]
    button.addEventListener('click', function(event){
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      updateCartTotal()
    })
  }
  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }
  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('tr')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = 
      ` <tr class="cart-row">
      <td>
        <figure class="itemside align-items-center">
          <div class="aside">
            <img src="${imageSrc}" class="img-sm" />
          </div>
          <figcaption class="info">
            <p class="cart-item-title">${title}</p
            >
          </figcaption>
        </figure>
      </td>
      <td>
        <input class="cart-quantity-input" type="number" value="1">
      </td>
      <td>
        <div class="price-wrap">
          <var class="price">${price}</var>
        </div>
      </td>
      <td class="text-right d-none d-md-block">
        <a
          data-original-title="Save to Wishlist"
          title=""
          href=""
          class="btn btn-light"
          data-toggle="tooltip"
          data-abc="true"
        >
          <i class="fa fa-heart"></i
        ></a>
        <button
          class="btn btn-light btn-round"
          data-abc="true"
        >
          Remove</button
        >
      </td>
    </tr>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-light btn-round')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('Rs.', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs.' + total
}