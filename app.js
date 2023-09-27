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
}

function orderCookieDough() {
  // console.log('ordering vanilla')
  const cookieDough = iceCream.find(flavor => flavor.name == 'Cookie Dough')
  cookieDough.quantity++
  console.log(cookieDough);
}

function orderStrawberry() {
  // console.log('ordering vanilla')
  const strawberry = iceCream.find(flavor => flavor.name == 'Strawberry')
  strawberry.quantity++
  console.log(strawberry);
}

// !SECTION Functions End