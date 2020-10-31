window.onload = function(){
     sessionStorage.clear();
}

function changeSize(){
    var x = document.getElementById("size").value;
    var image = document.getElementById("large_img");
    image.src = "images/product_" + x + ".jpg"
}

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

function showCart() {
    var x = document.getElementById("shopping_cart");
    x.style.display = "block";
}

function closeCart(){
    var x = document.getElementById("shopping_cart");
    x.style.display = "none";
}

function addToCart() {
    var x = document.getElementById("shopping_cart");
    x.style.display = "block";

    var item_name = document.getElementById("item_name").innerHTML;
    var color_text = document.getElementById("color_text").innerHTML;
    var item_price = document.getElementById("item_price").innerHTML;
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

    existing_item = (sessionStorage.getItem(color_text+item_price+size));
    if (existing_item !== null){
        /* the item exists already, update the item */
        item_quantity = parseInt(JSON.parse(existing_item)['quantity']);
        x = document.getElementById(color_text+item_price+size+'cart');
        var new_quantity = item_quantity+1;
        sessionStorage.setItem(color_text+item_price+size, JSON.stringify({color:color_text, price:item_price, size: item_size, quantity: new_quantity}));
        x.innerHTML = new_quantity;
    } else {
        /* create new item in the cart */
        item_quantity = 1;
        sessionStorage.setItem(color_text+item_price+size, JSON.stringify({color:color_text, price:item_price, size: item_size, quantity: item_quantity}));
        var new_item = document.createElement("div");

        new_item.id = color_text+item_price+size;
        new_item.className = "cart_item";
        new_item.innerHTML = "<img src = " + image + " alt = 'product_img'><h4>"
                            + item_name + " - " + size + " - " + color_text+ "</h4><p>Quantity: <span id = '" + color_text+item_price+size + "cart'>" + 
                            + String(item_quantity) + "</span></p>";
        document.getElementById("shopping_cart").appendChild(new_item);
    }   
}