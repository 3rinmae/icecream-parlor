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
  console.log(vanilla);
  drawCart()
}

function orderCookieDough() {
  // console.log('ordering vanilla')
  const cookieDough = iceCream.find(flavor => flavor.name == 'Cookie Dough')
  cookieDough.quantity++
  console.log(cookieDough);
  drawCart()
}

function orderStrawberry() {
  // console.log('ordering vanilla')
  const strawberry = iceCream.find(flavor => flavor.name == 'Strawberry')
  strawberry.quantity++
  console.log(strawberry);
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
  console.log('cost:', cost)
  // return cost

  const costElement = document.getElementById('cost')
  costElement.innerText = cost

  const cartElement = document.getElementById('cart')
  cartElement.innerHTML = content
}


// !SECTION Functions End