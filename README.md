# Bamazon

## Description

Bamazon is a simple mock storefront that uses the inuqirer package to take input from the user to "purchase" items that we pull from a MySQL database backend.  

## Setup

To run this application, you will need to have MySQL database installed. Link here: https://dev.mysql.com/doc/refman/5.6/en/installing.html Once isntalled, you'll need to create the bamazon database and products table using the [schema.sql] file. (Bamazon.sql). Run the code in your MySQL client to populate the database. Make sure that you npm install and get inquirer and mysql packages ready to rock. 

## User Input

Once the user clones and installs the packages and runs the sql file, they can enter "node bamazonCustomer.js" and the program will allow them to order items in varying quantities. Incorrect entry or orders with quantity above stock will return an error message and restart the input process.
