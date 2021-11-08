// const fName = document.getElementById('fname').value;
// const lName = document.getElementById('lname').value;
// const eMail = document.getElementById('email').value;
// const mob = document.getElementById('mob').value;
// const addr = document.getElementById('address').value;
// const pin = document.getElementById('pin').value;
// // const note

const addItem = document.querySelector(".add-item-button");
addItem.addEventListener("click",newItem);
var body = document.querySelector('.invoice-container-right-body');

function newItem(e){
    e.preventDefault();
    
    var row = `
    <div class="invoice-container-right-body-row">
        <div class="item-no-input">
            2
        </div>
        <div class="item-name-input">
            <input type="text" name="item-input-name" id="item-input-name" class="item-input-name">
        </div>
        <div class="item-price-input">
            <input type="number" name="item-input-price" id="item-input-price" class="item-input-price">   
        </div>
        <div class="item-quantity-input">
            <input type="number" name="item-input-quantity" id="item-input-quantity" class="item-input-quantity">   
        </div>
        <div class="item-amount-input">
            <input type="number" name="tem-input-amount" id="tem-input-amount" class="item-input-amount">   
        </div>
        <div class="add-item-input">
            <button class="add-item-button"><h1>+</h1></button>
        </div>
    </div>`

    body.appendChild(row);
    console.log("clicked");

                    
}
