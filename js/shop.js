// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
let products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 10/10.5
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 1-(1/3) //0.66666666667
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
    
    console.log('id ', id);
    const foundObject = products.find(obj => obj.id === id);
    cartList.push(foundObject)
    document.getElementById(`count_product`).innerHTML= cartList.length;

    console.log(cartList);

   /*  for (let i = 0; i < products.length; i++) {
        const product = products[i];
         if (product.id===id) {
            cartList.push(product)
            console.log(cartList)
            calculateTotal(cartList)
            return 
            }
            document.getElementById(`count_product`).innerHTML= cartList.length
    } */
}
// Exercise 2
function cleanCart() {
    cartList = []
    cart = []
    total = 0
    document.getElementById(`count_product`).innerHTML= cartList.length;
    console.log(cartList)
    console.log(cartList)

}
// Exercise 3
function calculateTotal() {
    for (let i = 0; i < cartList.length; i++) {
        const element = cartList[i];
       total+= element.price;
    }
    console.log(total, 'total without discount')
    //document.getElementById('total_price').innerHTML=total.toFixed(2);
}

// Exercise 4

   function generateCart() {
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i];

        const productIndex = cart.findIndex((productInCart) => productInCart.id === product.id);

        if(productIndex === -1){
            product.quantity = 1;
            cart.push(product);
        } else {
            cart[productIndex].quantity += 1; 
        }
        
    }
    console.log('cart ',cart);
    //applyPromotionsCart(cart);
}
 
// Exercise 5
    function applyPromotionsCart() {
        total = 0;
        for (let i = 0; i < cart.length; i++) {
            let product = cart[i];
            if (cart[i].hasOwnProperty("offer") && cart[i].quantity >= cart[i].offer.number){
                cart[i].subtotalWithDiscount = product.quantity * product.price * product.offer.percent;
            } else
            cart[i].subtotalWithDiscount = product.quantity * product.price;
            total += cart[i].subtotalWithDiscount;
        }
        document.getElementById('total_price').innerHTML=total.toFixed(2);
        console.log(cart);
      }


// Exercise 6
function printCart() {
    calculateTotal();
    generateCart();
    applyPromotionsCart();
    
    let cartListHtml = [];
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        cartListHtml.push(`<tr>
                <th scope="row">${product.name}</th>
                <td>$${product.price}</td>
                <td>${product.quantity}</td>
                <td>$${product.subtotalWithDiscount}</td>
                <td><a type="button" onclick="removeFromCart(${product.id})">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    </a></td>
                </tr>`);
    };
    document.getElementById("cart_list").innerHTML = cartListHtml.join("<br>");
}
// Fill the shopping cart modal manipulating the shopping cart dom


// Exercise 7
function addToCart(id) { //Para refactorisar y hacer funcionar ejercicio_7, tendria que cambiar en html nombre de funtion desde buy(id) al addToCart(id)
    
    const productIndex = cart.findIndex((productInCart) => productInCart.id === id);
    
    if(productIndex === -1){
        const foundObject = products.find(obj => obj.id === id);
        foundObject.quantity = 1;
        cart.push(foundObject);
    } else {
        cart[productIndex].quantity += 1; 
    }
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// ** Nivell II **

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}