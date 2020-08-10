              //DELETE method using fetch
              //Creating function to delete items from cart
              function deleteItem(item){
                url = "http://localhost:5000/shoppingcart/" + item

                fetch(url, {
                  method: 'DELETE', // or 'PUT'
                })
                .then(res => res.json())
                .then(function() {
                  location.reload();
                })
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));
              }
              //Creating function that gets the total amount of the shopping cart
              function TotalPrice() {
                fetch('http://localhost:5000/shoppingcart/price')
                  .then(function(response) {
                      return response.json();
                  })
                  .then(function(data) {

                    //Creating elements
                      let priceDiv = document.createElement("div");
                      priceDiv.classList.add("card");
                      priceDiv.classList.add("text-center");
                      let total = document.createElement("div")
                      let price = document.createElement("h5")

                      total.innerHTML = "Total Price"
                      price.innerHTML = Object.values(data)

                      priceDiv.classList.add("card");

                      priceDiv.appendChild(total)
                      priceDiv.appendChild(price)
                      let price_cont = document.getElementById("price")
                      price_cont.appendChild(priceDiv)

                  })
                  .catch(function(err) {
                      console.error(err);
                  });
              }
              //Creating function that gets the shopping cart
              //Using TotalPrice and deleteItem
              function ShoppingCart() {
                fetch('http://localhost:5000/shoppingcart')
                  .then(function(response) {
                      return response.json();
                  })
                  .then(function(data) {
                      //Getting shopping cart elements
                      let keys = Object.keys(data)
                      let values = Object.values(data)

                      let shoppingcart = document.getElementById("shoppingcart");
                      //For loop that goes through shopping cart items
                      for (i = 0; i < keys.length; i++) {
                        
                        //Creating an element for each article in the catalogue
                        //Adding classes
                        let newDiv = document.createElement("div");
                        newDiv.classList.add("card");
                        let name = document.createElement("h5");
                        name.classList.add("card-title");
                        let price = document.createElement("div");
                        price.classList.add("card-text");
                        let button_delete = document.createElement("Button");
                        button_delete.classList.add("btn-primary");


                        let current_key = keys[i]
                        //Applying innerHTML
                        name.innerHTML = current_key;
                        price.innerHTML ="Quantity: " + values[i];
                        button_delete.innerHTML = "Remove item";
                        
                        
                        button_delete.onclick = function(){
                             deleteItem(current_key);
                             };
                        //Creating element hierarchy
                        newDiv.appendChild(name);
                        newDiv.appendChild(price);
                        newDiv.appendChild(button_delete);

                        shoppingcart.appendChild(newDiv)
                      }
                      //TotalPrice();
                  })
                  .catch(function(err) {
                      console.error(err);
                  });
              }
              //Executing ShoppingCart and TotalPrice on load
              window.addEventListener('load', ShoppingCart);
              window.addEventListener('load', TotalPrice);