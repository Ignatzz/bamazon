var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// fires up our connection with mysql and runs the list products function
connection.connect(function(err) {
    if (err) throw err;
      listProducts();
    });
// Lists our products
  function listProducts(){
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        //loops through our results and consoles our item ids, names of products, and their corresponding prices
    for (var i = 0; i < result.length; i++) {
        console.log("ID: " + result[i].item_id + " || Name: " + result[i].product_name + " || Price: $" + result[i].price) + " ||Department: "+ result[i].department_name;
      }
      // fires up our customer prompt
      customerPrompt();
  })}


  
function customerPrompt (){
    // grabs item ID and quantity inputs from our users
    inquirer
    .prompt([
      {
        name: "itemChoice",
        type: "input",
        message: "Enter the ID # of the item that you would like to purchase",
       },
       {
        name: "itemQuantity",
        type: "input",
        message: "What quantity of this item would you like to purchase?",
       }
])
.then(function(answer) {
    connection.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    // parses our inputs into intergers and assign them to variables
    var itemNo = parseInt(answer.itemChoice);
    var requestQ = parseInt(answer.itemQuantity);
    // makes sure our item # actually corresponds with an item, if not, it will ask our user to choose a valid item number a run the customer prompt function again
    if (itemNo<1||itemNo>10||isNaN(itemNo)){
        console.log("Sorry, please choose a valid item number");
        customerPrompt();
    }

    else if (isNaN(requestQ)){
        console.log("Sorry, please enter a number");
        customerPrompt();
    }
    // if item # does correspond with an item, we then check to make sure we have sufficient to stock to fulfill the order, and if we do not, we will run the customer prompt function again
    else if(requestQ>result[itemNo-1].stock_quantity){
   console.log("Sorry, we do not have enough if this item in stock. Please try again.")
   customerPrompt();
    }
    // if both conditions are satisfied by the user input, we first log the customers order back to them with their total price
    else{
        console.log("Tight, we got you! We will be sending you " + requestQ + " "+ result[itemNo-1].product_name+"s promptly! Your total is: $"+ result[itemNo-1].price * requestQ);
        // then we subtract their order from the stock quantity to calculate what the new stock quantity will be
        var newQuantity = (result[itemNo-1].stock_quantity-requestQ);
        // console.log("New Q: "+ newQuantity)
        // and finally we update that quantity in mysql
        var updater = "UPDATE products SET stock_quantity = " + newQuantity + " WHERE item_id = " + (itemNo);
        connection.query(updater, function(err) {
            if (err) throw err;
            customerPrompt();
    })
}})
})}
