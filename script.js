// webpage to order pizza, this part see how much it will cost depending on the input, and what the size and the amount of toppings...

document.getElementById('submitbutton').addEventListener('click', pizzaCost)
// Once the user clicks the button, the function pizzaCost () will happen...

function pizzaCost () {
  // The function that calculates the price of the pizza. Executes the button on the other page...

  const large = document.getElementById('large').value
  const extralarge = document.getElementById('extralarge').value
  const one = document.getElementById('onetopping').value
  const two = document.getElementById('twotopping').value
  const three = document.getElementById('threetopping').value
  const four = document.getElementById('fourtopping').value
  const size = document.getElementById('size').value
  const toppings = document.getElementById('toppingamount').value
  // variables for the code below...

  if (size === large && toppings === one) {
    alert('Your pie will be $7.91.')
  } else if (size === large && toppings === two) {
    alert('Your pie will be $8.76')
  } else if (size === large && toppings === three) {
    alert('Your pie will be $9.61')
  } else if (size === large && toppings === four) {
    alert('Your pie will be $10.57')
  } else if (size === extralarge && toppings === one) {
    alert('Your pie will be $12.43')
  } else if (size === extralarge && toppings === two) {
    alert('Your pie will be $13.28')
  } else if (size === extralarge && toppings === three) {
    alert('Your pie will be $14.13')
  } else if (size === extralarge && toppings === four) {
    alert('Your pie will be = $15.09')
  } else {
    alert('Uh oh bzzzzz seems like theres an error with the order please try again!')
  }
  // See the price for large and extra large, and cahnges price depending on amount of topping aswell...
}