function solve() {
   const addButtons = Array.from(document.getElementsByClassName('add-product'));

   addButtons.forEach((button) => {
      button.addEventListener('click', addProduct);
   });

   const checkoutBtn = document.getElementsByClassName('checkout')[0];
   checkoutBtn.addEventListener('click', calculateTotalPrice)

   let products = {};

   function addProduct(e) {
      let productPrice = Number(e.target.parentElement.parentNode.children[3].textContent);
      let productName = e.target.parentElement.parentNode.children[1].children[0].textContent;
      const textArea = document.getElementsByTagName('textarea')[0];
      textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      if (!products.hasOwnProperty(productName)) {
         products[productName] = productPrice;
      } else {
         products[productName] += productPrice;
      }
   }


   function calculateTotalPrice() {
      let totalPrice = 0;
      let productList = [];
      let output = '';

      if (products) {
         for (const key in products) {
            totalPrice += products[key];
            productList.push(key);
         }
      }

      output = `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`;
      const textArea = document.getElementsByTagName('textarea')[0];
      textArea.value += output;


      const addButtons = Array.from(document.getElementsByClassName('add-product'));
      for (const button of addButtons) {
         button.removeEventListener('click', addProduct);
      }
      const checkoutBtn = document.getElementsByClassName('checkout')[0];
      checkoutBtn.disabled = true;

   }

}