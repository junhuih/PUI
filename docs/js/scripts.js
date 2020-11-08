//  Debug purpose, clear al local storage
//  window.onload = function(){
//          localStorage.clear();
// }

// Change the size of the item
function changeSize(){
    var x = document.getElementById("size").value;
    var image = document.getElementById("large_img");
    image.src = "images/product_" + x + ".jpg"
}

// Change the color of the item
function changeColor(color) {
    var image = document.getElementById("large_img");
    var color_text = document.getElementById("color_text");
    var item_price = document.getElementById("item_price");
    if (color == "strawberry"){
        image.src = "images/product_6.jpg"
        color_text.innerHTML = "Strawberry";
        item_price.innerHTML = "$50";
    } else if (color == "blackberry"){
        image.src = "images/product_7.jpg"
        color_text.innerHTML = "Blackberry";
        item_price.innerHTML = "$55";
    } else if (color == "crazyberry"){
        image.src = "images/product_8.jpg"
        color_text.innerHTML = "Crazyberry";
        item_price.innerHTML = "$60";
    } else if (color == "fire_orange"){
        image.src = "images/product_5.jpg"
        color_text.innerHTML = "Fire Orange";
        item_price.innerHTML = "$70";
    }
}

// Display cart (hidden by default)
function showCart() {
    // set up shopping cart as display
    var x = document.getElementById("shopping_cart");
    x.style.display = "block";

    // clear all existing data and initialize the cart if necessary
	document.querySelectorAll('.cart_item').forEach(e => e.remove());
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));
    } else {
    	var cart = {};
    }

    // total cart price
    var cart_price = 0;

    for (item in cart){
    	var item_value = JSON.parse(cart[item])
    	var item_name = String(item_value['item_name']);
    	var color_text = item_value['color'];
    	var item_price = item_value['price'];
    	var item_size = item_value['size'];
    	var quantity = item_value['quantity'];
        var image = String(item_value['image']);
        if (color_text == "Fire Orange"){
            color_text = "fireorange"
        }

	    if (item_size == 1) {
	        size = "Tiny";
	    } else if (item_size == 2) {
	        size = "Small";
	    } else if (item_size == 3) {
	        size = "Medium";
	    } else if (item_size == 4) {
	        size = "Large";
	    }
	    var cur_price = parseInt(item_price) * quantity;
	    cart_price += cur_price;

    	var new_item = document.createElement("div");
        new_item.id = color_text+item_price+size;
        new_item.className = "cart_item";
        new_item.innerHTML = "<img src = " + image + " alt = 'product_img' style = 'float:left'><div><h4>"
                            + item_name + " - " + size + " - " + color_text+ "</h4><p style = 'font-size:15px'>Quantity: <span id = '" + color_text+item_price+size + "cart'>" + 
                            + String(quantity) + "</span> &nbsp;Price: $"+item_price + "<span style = 'font-size:10px'>(x "+quantity+")</span></p>" +
                            "<p onclick = deleteItem('" + new_item.id + "') style = 'color:blue; font-size:15px'>Delete</p></div>";
        document.getElementById("shopping_cart").appendChild(new_item);
    }
    document.getElementById("cart_price").innerHTML = "$" + cart_price;
}

// remove the selected item
function deleteItem(value) {
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));
    } else {
    	var cart = {};
    }

    var cart_price_document = document.getElementById("cart_price");
    var cart_price = 0;

    for (item in cart){
        if (value == item) {
            delete(cart[item])
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));		
    showCart()
}

// close the cart
function closeCart(){
    var x = document.getElementById("shopping_cart");
    x.style.display = "none";
}

// add the item from the item detail to the cart, and display the cart
function addToCart() {
    var item_name = document.getElementById("item_name").innerHTML;
    var color_text = document.getElementById("color_text").innerHTML;
    var item_price = document.getElementById("item_price").innerHTML.substring(1);
    var item_size = document.getElementById("size").value;


    if (item_size == 1) {
        size = "Tiny";
    } else if (item_size == 2) {
        size = "Small";
    } else if (item_size == 3) {
        size = "Medium";
    } else if (item_size == 4) {
        size = "Large";
    }

    var image = document.getElementById("large_img").src;

    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        existing_item = cart[color_text+item_price+size];
    } else {
    	var cart = {};
    	existing_item = null;
    }
    if (color_text == "Fire Orange") {
        color_text = "fireorange"
    }

    if (existing_item){
        /* the item exists already, update the item */
        item_quantity = parseInt(JSON.parse(existing_item)['quantity']);
        var new_quantity = item_quantity+1;
        key = color_text+item_price+size;
    	value = JSON.stringify({item_name: item_name, color:color_text, price:item_price, size: item_size, quantity: new_quantity, image: image});
    	cart[key] = value;
    } else {
        /* create new item in the cart */
        item_quantity = 1;
        key = color_text+item_price+size;
    	value = JSON.stringify({item_name: item_name, color:color_text, price:item_price, size: item_size, quantity: item_quantity, image: image});
    	cart[key] = value;
    } 
    
    localStorage.setItem('cart', JSON.stringify(cart));		
    showCart()
}