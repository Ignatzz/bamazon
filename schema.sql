DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price DECIMAL(10,2),
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Zweihander", "Sports and Outdoors", 340.75,3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Smough's Hammer", "Sports and Outdoors", 215.25,5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Murakumo", "Sports and Outdoors", 315.00,7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Estus Flask", "Beauty and Health", 44.50,1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Purple Moss Clump", "Beauty and Health", 14,42);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Transient Curse", "Beauty and Health", 16,54);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Skull Lantern", "Home, Garden & Tools", 46.50, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Dragon Head Stone", "Home, Garden & Tools", 29.50, 14);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Demon Titanite", "Industrial & Scientific", 43,23);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Red Titanite Slab", "Industrial & Scientific", 51,24);

SELECT * FROM products;