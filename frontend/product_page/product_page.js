let cartItems = [];
      let cartTotal = 0;

      function addToCart(productName, price) {
        cartItems.push({ productName, price });
        cartTotal += price;
        updateCartSummary();
      }

      function updateCartSummary() {
        const cartList = document.getElementById("cart-items");
        const cartTotalElement = document.getElementById("cart-total");
        cartList.innerHTML = "";

        cartItems.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.productName} - Rs.${item.price.toFixed(
            2
          )}`;
          cartList.appendChild(listItem);
        });

        cartTotalElement.textContent = cartTotal.toFixed(2);
      }

      function checkout() {
        alert("Redirecting to checkout. Total: Rs." + cartTotal.toFixed(2));
      }