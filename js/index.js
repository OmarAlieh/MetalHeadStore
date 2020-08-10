 //Method to be executed on click of button_add_to_cart
 function addItem(item){
    //POST method using fetch
    url = "http://localhost:5000/shoppingcart/" + item
    console.log(url)

    fetch(url, {
      method: 'POST', 
    })
    .then(res => res.json()) 
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  //Creating function to get catalogue using GET request
  function Catalogue() {
    fetch('http://localhost:5000/catalogue')
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          console.log('data = ', data);

          //Getting catalogue elements
          let keys = Object.keys(data)
          let values = Object.values(data)

          let article = document.getElementById("article");
          
          //For loop that goes through catalogue items
          for (i = 0; i < keys.length; i++) {
           
            //Creating an element for each article in the catalogue
            //Adding classes
            let newDiv = document.createElement("div");
            newDiv.classList.add("card");
            let image = document.createElement("img");
            let name = document.createElement("div");
            name.classList.add("card-title");
            let price = document.createElement("div");
            newDiv.classList.add("card-text");
            let button_add_to_cart = document.createElement("Button");
            button_add_to_cart.classList.add("btn-primary");
            
            let current_key = keys[i]
            button_add_to_cart.onclick = function(){
                       addItem(current_key);
                       };

            //Applying innerHTML
            
            name.innerHTML = current_key;
            price.innerHTML = "Price: $" + values[i]; 
            button_add_to_cart.innerHTML = "Add to cart";

            //Creating element hierarchy
            newDiv.appendChild(name);
            newDiv.appendChild(price);
            newDiv.appendChild(button_add_to_cart);
            article.appendChild(newDiv)
          }
      })
      .catch(function(err) {
          console.error(err);
      });
  }
  //Executing Catalogue function on load 
  window.addEventListener('load', Catalogue);
