const Items = [{
  name: 'sprinkles',
  type: 'topping',
  price: 2,
  amount: 0,
},
{
  name: 'chocolate chips',
  type: 'topping',
  price: 3,
  amount: 0,
},
{
  name: 'gummie worms',
  type: 'topping',
  price: 2,
  amount: 0,
},
{
  name: 'cone',
  type: 'vessels',
  price: 3,
  amount: 0,
},
{
  name: 'waffles',
  type: 'vessels',
  price: 4,
  amount: 0,
},
{
  name: 'dipped cone',
  type: 'vessels',
  price: 5,
  amount: 0,
},
{
  name: 'vanilla',
  type: 'ice cream',
  price: 4,
  amount: 0,
},
{
  name: 'chocolate',
  type: 'ice cream',
  price: 4,
  amount: 0,
},
{
  name: 'strawberry',
  type: 'ice cream',
  price: 4,
  amount: 0,
},
{
  name: 'moose track',
  type: 'ice cream',
  price: 4,
  amount: 0,
},
{
  name: 'mint',
  type: 'ice cream',
  price: 4,
  amount: 0,
},
{
  name: 'bday cake',
  type: 'ice cream',
  price: 4,
  amount: 0,
}
]

let Payed = false

function addToReceipt(name) {
  let neededItem = Items.find(Item => Item.name == name)
  // @ts-ignore
  neededItem.amount++
  draw()
}

async function payButton() {
  console.log('paying');
  // @ts-ignore
  let result = await Swal.fire({
    title: 'are you ready to pay?',
    text: "there is no refunds",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Pay!'
  })
  console.log('after confirm', result)
  if (result.isConfirmed) {
    Payed = true
    // @ts-ignore
    Swal.fire(
      'Payed for!',
      'We took the liberty of just taking your money.',
      'success'
    )
  }
  draw()
}

function draw() {
  console.log('drawing Cart')
  let theArray = ''
  let grandAmount = 0
  if (Payed) {
    Payed = false
    Items.forEach(Item => Item.amount = 0)
  }
  Items.forEach(Item => {
    if (Item.amount > 0) {
      theArray += `<div class="bg-receipts b-receipts py-1 d-flex flex-row">
      <div class="col-6">
        <p><span class="">${Item.name}</span></p>
      </div>
      <div class="col-6">
        <p class="d-flex justify-content-between"><span>${Item.amount}</span><span>$${Item.price}</span><span>$${Item.amount * Item.price}</span></p>
      </div>
    </div>`
    }
    grandAmount += Item.amount * Item.price
  });
  let theChosenOne = document.getElementById('theChosenOne')
  let Total = document.getElementById('Total')

  // @ts-ignore
  theChosenOne.innerHTML = theArray
  // @ts-ignore
  Total.innerText = '$' + grandAmount.toString()
}