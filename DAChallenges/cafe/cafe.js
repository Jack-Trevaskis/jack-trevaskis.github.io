// -- JAVASCRIPT CAFE! -- //

// products object

let products = {
    whiteCoffee: {
        stock: 4,
        price: 4
    },
    blackCoffee: {
        stock: 4,
        price: 4
    },
    chaiLatte: {
        stock: 8,
        price: 3
    },
    hotChocolate: {
        stock: 7,
        price: 3.5
    }

}

function displayProducts () {
    document.getElementById("whiteCoffee").innerHTML = "White Coffee: " + products.whiteCoffee.stock
    document.getElementById("blackCoffee").innerHTML = "Black Coffee: " + products.blackCoffee.stock
    document.getElementById("hotChocolate").innerHTML = "Hot Chocolate: " + products.hotChocolate.stock
    document.getElementById("chaiLatte").innerHTML = "Chai Latte: " + products.chaiLatte.stock
}


displayProducts()

// Customers Object

let customer = {
    order: []
}

let maxOrderSize = 5
let minOrderSize = 1


function generateCustomerOrder () {
    //generate random size for order in range 1 - 5
    //make a new array of things theyre ordering
    //assign new order to customer object
    //display the customer order

    let orderSize = getRandomInt(minOrderSize, maxOrderSize)

    let newOrder = []

    let productNames = Object.keys(products)
    

    for (let i = 0; i < orderSize; i++) {
        
        let productIndex = getRandomInt(0, productNames.length - 1)
        let productRan = productNames[productIndex]
        newOrder.push(productRan)

    }

    customer.order = newOrder
    displayCustomerOrder()
}



function displayCustomerOrder () {
    document.getElementById("customerOrder").innerHTML = "Customer Order: " + customer.order
}

document.getElementById("generateOrder").onclick = generateCustomerOrder

//TRANSACTIONS

let cash = 0

function displayCash() {
    document.getElementById("cash").innerHTML = "Cash: " + cash
}

displayCash()

function fillOrder() {
    //make a variable to keep track of sale total
    //loop through the customer order array
    //if we have product available sell it, keep track of sale
    //if we dont have product available, alert them and dont sell.
    //add sales to cash
    //clear customer order
    //display new totals

    let saleTotal = 0

    for (let i = 0; i < customer.order.length; i++) {
        
        let productName = customer.order[i]

        if (products[productName].stock > 0) {
            products[productName].stock--
            saleTotal += products[productName].price
        }

        else {
            alert("Sorry we're all out of " + productName)

        }
    }

    cash += saleTotal
    newOrder = []
    displayCash()
    displayProducts()
    displayCustomerOrder()

}

document.getElementById("fillOrder").onclick = fillOrder



function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//console.log(productnames[getRandomInt(0, products.length)])
//console.log(orderSize)
