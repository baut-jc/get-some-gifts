//Global Variables
let gifts
let wishList
let price

//querySelectors
const giftDeets = document.querySelector('tbody')
const totalCost = document.querySelector('span')

//EventListener
window.addEventListener('load', fetchData)

//functions
function fetchData() {
  fetch('http://localhost:3001/items')
  .then(response => response.json())
  .then(data => {
    gifts = data
    displayData()
    return gifts
  })
} 

function displayData() {
  giftDeets.innerHTML = ``
  gifts.forEach(gift => {
  giftDeets.innerHTML += `
  <tr>  
    <td>${gift.recipient}</td>
    <td>${gift.name}</td>
    <td>$ ${gift.priceInDollars}</td>
    <td><input type="checkbox"></td>
  </tr>`
  })
}

function calculateCost() {
  const totalPrice = gifts.reduce((sum, gift) => {
    sum += gift.priceInDollars
    price = sum
    return price
  }, 0)
}

function displayTotal() {
  calculateCost()
  totalCost.innerText = `${price}`
}
