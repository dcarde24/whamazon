var mysql = require("mysql");
var inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jeanjean24!",
    database: "bamazon"
})

connection.connect(function(err){
    if(err) throw err;
    console.log("Connecting to the site.....\n");

    start();
});

function start(){
    console.log("   ===== Welcome to Bamazon =====");
    console.log("Now with more items than amazon! *not guarenteed* \n ")

    inquirer
    .prompt([
        {
            name: "intro",
            type: "list",
            message: "What would you like to do?",
            choices: ["Browse Catalog", "Purchase Item"]
        }
    ])
    .then(function(answer){
        if(answer.intro === "Browse Catalog"){
            connection.query("SELECT * FROM products", function(err, res){
                if (err) throw err;
                console.table(res);
                start();
            });

        } else {

            inquirer
            .prompt([
        {
            name: "productID",
            type: "input",
            message: "Please enter the item ID that you would like to purchase!\n"
        },
        {
            name: "quantity",
            type: "input",
            message: "Splendid!, now how many would you like? \n"
        }
            ])
        .then(function(answer){

            connection.query("SELECT * FROM products", function(err, res){
                if (err) throw err;

                console.log("\nYou have chosen item " + res[answer.productID - 1].product_name + " Quantity left");

                if (res[answer.productID - 1].stock_quantity < answer.quantity){
                    console.log("We are sorry, we do not have that many available, check back soon\n");
                } else {
                    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = "
                    [answer.quantity, answer.productID],
                    function(err, res){
                        if(err) throw err
                    })
                    console.log("Order Confirmed! We thank you shopping with bamazon! \n");
                    console.log("Quantity updated!");
                }
                start();
            })
        })    
        }
    })
}