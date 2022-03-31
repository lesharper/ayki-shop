CREATE DATABASE shop;
\CONNECT shop;

-- Создание таблиц --

CREATE TABLE roles (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    role VARCHAR(25) NOT NULL
);

CREATE TABLE genders (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    gender VARCHAR(25) NOT NULL
);

CREATE TABLE sales (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    discount INTEGER NOT NULL
);

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    balance NUMERIC(9,2) DEFAULT 0.00,
    role_id INTEGER  NOT NULL DEFAULT 2,
    gender_id INTEGER NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE,
    FOREIGN KEY (gender_id) REFERENCES genders (id) ON DELETE CASCADE
);

CREATE TABLE products (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(9,2) NOT NULL,
    gender_id INTEGER NOT NULL,
    FOREIGN KEY (gender_id) REFERENCES genders (id) ON DELETE CASCADE
);

CREATE TABLE categories (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE sales_products (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    sale_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (sale_id) REFERENCES sales (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE photos (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    image TEXT NOT NULL,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE product_size (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    size VARCHAR(5) NOT NULL,
    quantity INTEGER NOT NULL  DEFAULT 100,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE basket (
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY(user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE favorites (
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    PRIMARY KEY(user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE feedbacks (
    review TEXT NOT NULL,
    rating INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    PRIMARY KEY(user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE orders (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    city VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    delivery_date DATE NOT NULL DEFAULT (NOW()+interval '10 day'),
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

psql \! chcp 1251
set client_encoding='win1251';
