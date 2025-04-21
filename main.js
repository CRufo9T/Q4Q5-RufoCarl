function verifyOrder() {
	var order = document.getElementById('inputChoice').value;

	switch (order) {
    case "B":
          document.getElementById('choiceResult').innerHTML = "You ordered Burger🍔"
          break;
    case "F":
          document.getElementById('choiceResult').innerHTML = "You ordered Fries 🍟"
          break;
    case "S":
          document.getElementById('choiceResult').innerHTML = "You ordered  Soda🥤"
          break;
          default:
	     document.getElementById('choiceResult').innerHTML = "Your order is out of the menu";   	         
	}
}