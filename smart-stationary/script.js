


let total = 0;

let order = document.querySelector("#order");
let table = document.getElementById("cartTable");
let totalAmount = document.getElementById("totalAmount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
}



function addToCart(name, price) {

    alert(name + " added successfully!");

    cart.push({name, price});

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}


function renderCart(){

    table.innerHTML = `
    <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Action</th>
    </tr>`;

    total = 0;

    cart.forEach((item,index)=>{

        let row = table.insertRow();

        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = "₹" + item.price;

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";

        removeBtn.onclick = function(){
            removeItem(index);
        };

        row.insertCell(2).appendChild(removeBtn);

        total += item.price;

    });

    totalAmount.innerText = "Total: ₹" + total;

}



function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();

}



function additem(link,heading,price,category="office"){

    let item=document.querySelector(".product-grid");

    let html = `
        <div class="card" data-category="${category}">

            <div class="img-box">
                <img src="${link}" alt="${heading}">
            </div>

            <h3>${heading}</h3>

            <p class="price">₹${price}</p>

            <button onclick="addToCart('${heading}',${price})">
            Add to Cart
            </button>

        </div>`;

    item.innerHTML += html;
}




function orderall(){

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    cart = [];

    localStorage.removeItem("cart");

    renderCart();
};







function addProduct(){

let name = document.getElementById("productName").value;
let price = document.getElementById("productPrice").value;
let image = document.getElementById("productImage").value;

if(name === "" || price === "" || image === ""){
alert("Please fill all fields");
return;
}

additem(image, name, price);

alert("Product Added Successfully!");

// clear inputs
document.getElementById("productName").value="";
document.getElementById("productPrice").value="";
document.getElementById("productImage").value="";




};

// SEARCH PRODUCTS
function searchProducts() {

    let input = document
        .getElementById("searchInput")
        .value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let productName = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if(productName.includes(input)){
            card.style.display = "block";
        } 
        else{
            card.style.display = "none";
        }

    });

}


// FILTER BY CATEGORY
function filterCategory() {

    let category = document
        .getElementById("categoryFilter")
        .value;

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let cardCategory = card
            .getAttribute("data-category");

        if(category === "all" || cardCategory === category){
            card.style.display = "block";
        } 
        else{
            card.style.display = "none";
        }

    });

}


order.addEventListener("click",orderall);



additem("https://rukminim1.flixcart.com/image/1500/1500/xif0q/velcro/t/j/q/1-self-adhesive-hook-loop-tapes-white-2m-hook-2m-loop-25mm-width-original-imah8af2tvyutfbj.jpeg","Sticky Tapes",200,"tools");

additem("https://img.tatacliq.com/images/i12/1316Wx1468H/MP000000018762249_1316Wx1468H_202308160914081.jpeg","Scissors",150,"tools");

additem("https://m.media-amazon.com/images/I/71NCCfOotHL.jpg","Paper Clips 4 Inch Large",20,tools);

additem("https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0S1c7hC9GDzKYXBSPC6LcmM3ZjMw21vXSkSozgG8KKY8Vse6-mq9ntoj_H_fIp1id3KKbFXmq3K2ayULhikrLHOs6pt4XEQ","Metal Desk Organizer",200,"office");

additem("https://images.promotionsonly.com.au/hires/sticky-note-phone-holder.jpg","Sticky Note",30,"office");

additem("https://inkarto.com/cdn/shop/files/WhatsApp_Image_2024-07-26_at_12.43.13_PM.jpg?v=1768717247&width=535","Acrylic Paint Markers",50,"writing");

additem("https://inkarto.com/cdn/shop/files/Untitled_design_-_2025-12-19T180045.147.jpg?v=1767943706&width=535","Light Blue acrylic colour",35,"writing");




renderCart();

showSection("home");
