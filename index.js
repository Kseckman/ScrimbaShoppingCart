const itemsContainer = document.getElementById('itemsContainer')
const shoppinCart = document.getElementById('shoppingCart')
const totalPrice = document.getElementById('totalPrice')
const itemsObj =[
        {name: 'cat food',
        price: 1 },
        {name: 'sparkling grape juice',
        price: 2 },
        {name: 'murder mystery novel',
        price: 15 }
    ]

function render(){
    let itemsHTML = ''

    itemsObj.forEach(function(item, index){
        itemsHTML += `
            <div class="itemElement">
                <p>${item.name}<span> $${item.price}</span></p>
                <button class="addButton" id='${index}'>+</button>
            </div> 
        `
    })
    itemsContainer.innerHTML = itemsHTML
}

render()
      
const addButtons = document.getElementsByClassName('addButton')

for (let btn of addButtons){
    btn.addEventListener('click', addItemToCart)
}

const cartItems = []

function addItemToCart(){ 
    cartItems.push(itemsObj[this.id])
    console.log(cartItems)
    renderCart()
}

function renderCart(){
    let itemsHTML = ''

    cartItems.forEach(function(item, index){
        itemsHTML += `
            <div class="itemElement">
                <p>${item.name}<span> $${item.price}</span></p>
                <button class="minusButton" id='${index}'>-</button>
            </div> 
        `
    })
    shoppinCart.innerHTML = itemsHTML

    let total = 0
    cartItems.forEach((item) =>  {
       total += item.price
    })

    totalPrice.innerText = total
}