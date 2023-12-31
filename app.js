// SECTION Global Variables

const iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
}]

// !SECTION Global Variables End

// SECTION Functions

function orderVanilla() {
  // console.log('ordering vanilla')
  const vanilla = iceCream.find(flavor => flavor.name == 'Vanilla')
  vanilla.quantity++
  // console.log(vanilla);
  drawCart()
}

function orderCookieDough() {
  // console.log('ordering vanilla')
  const cookieDough = iceCream.find(flavor => flavor.name == 'Cookie Dough')
  cookieDough.quantity++
  // console.log(cookieDough);
  drawCart()
}

function orderStrawberry() {
  // console.log('ordering vanilla')
  const strawberry = iceCream.find(flavor => flavor.name == 'Strawberry')
  strawberry.quantity++
  // console.log(strawberry);
  drawCart()
}

function orderToppings(toppingName) {
  const foundTopping = toppings.find(topping => topping.name == toppingName)
  // console.log(toppingName, foundTopping)
  foundTopping.quantity++
  drawCart()
}



function drawCart() {
  let cost = 0
  let content = ''
  iceCream.forEach(flavor => {
    if (flavor.quantity > 0) {
      const flavorCost = (flavor.price * flavor.quantity)
      cost += flavorCost
    }
  })
  iceCream.forEach(flavor => {
    if (flavor.quantity > 0) {
      const flavorCost = (flavor.price * flavor.quantity)
      content += `<p>
      ${flavor.name} | Qty:${flavor.quantity} | Price: $${flavorCost} </p>`
    }
  })

  toppings.forEach(flavor => {
    if (flavor.quantity > 0) {
      const flavorCost = (flavor.price * flavor.quantity)
      cost += flavorCost
    }
  })
  toppings.forEach(flavor => {
    if (flavor.quantity > 0) {
      const flavorCost = (flavor.price * flavor.quantity)
      content += `<p>
      ${flavor.name} | Qty:${flavor.quantity} | Price: $${flavorCost} </p>`
    }
  })

  // console.log('cost:', cost)
  // return cost

  const costElement = document.getElementById('cost')
  costElement.innerText = cost

  const cartElement = document.getElementById('cart')
  cartElement.innerHTML = content
}

function checkout() {
  const wantsToCheckout = window.confirm("Are you sure you want to submit your order?")
  if (!wantsToCheckout) {
    return
  }
  iceCream.forEach(flavor => flavor.quantity = 0)
  toppings.forEach(flavor => flavor.quantity = 0)
  drawCart()
}


// !SECTION Functions End