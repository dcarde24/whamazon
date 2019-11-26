DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INTEGER(10),
    stock_quantity INTEGER(10),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("LED Lights", "Lighting", 80, 100),
("Subwoofers", "Electronics", 100, 10),
("Gamestation", "Electronics", 350, 10),
("Headlight bulbs", "Lighting", 10, 30),
("Soccer Ball", "Sports", 15, 20),
("Basketball", "Sports", 20, 20),
("Toaster", "Household", 5, 40),
("Refrigerator", "Household", 3, 200),
("Juice", "Groceries", 100, 5),
("Sandwich Meat", "Groceries", 50, 10);