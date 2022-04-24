CREATE DATABASE shop;
\connect shop;

-- Создание таблиц --

CREATE TABLE roles (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    role VARCHAR(25) NOT NULL
);

INSERT INTO roles (role) VALUES ('клиент'),('администратор');

CREATE TABLE sex (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    sex VARCHAR(25) NOT NULL
);

INSERT INTO sex (sex) VALUES ('мужчина'),('женщина');

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL,
    balance NUMERIC(9,2) DEFAULT 0.00,
    role_id INTEGER  NOT NULL DEFAULT 2,
    sex_id INTEGER NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE,
    FOREIGN KEY (sex_id) REFERENCES sex (id) ON DELETE CASCADE
);


CREATE TABLE categories (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE subcategories (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    subcategory VARCHAR(50) NOT NULL,
    category_id INTEGER NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE TABLE products (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(9,2) NOT NULL,
    category_id INTEGER NOT NULL,
    sex_id INTEGER NOT NULL,
    FOREIGN KEY (sex_id) REFERENCES sex (id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE TABLE sales (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    discount INTEGER NOT NULL
);

CREATE TABLE product_sale (
    product_id INTEGER NOT NULL,
    sale_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE,
    FOREIGN KEY (sale_id) REFERENCES sales (id) ON DELETE CASCADE
);

CREATE TABLE photos (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    image TEXT NOT NULL,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE size (
    id SMALLSERIAL NOT NULL PRIMARY KEY,
    size VARCHAR(5) NOT NULL
);

CREATE TABLE product_size (
    product_id INTEGER NOT NULL,
    size_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE,
    FOREIGN KEY (size_id) REFERENCES size (id) ON DELETE CASCADE
);

CREATE TABLE basket (
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
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
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    review TEXT NOT NULL,
    rating INTEGER NOT NULL,
    PRIMARY KEY(user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE orders (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    city VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    delivery_date DATE NOT NULL DEFAULT (NOW()+interval '10 day')
);

CREATE TABLE product_order (
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    order_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);



psql \! chcp 1251
set client_encoding='win1251';
