DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

DROP TABLE IF EXISTS books;


CREATE TABLE books (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    author varchar(255) NOT NULL,    
    readed BOOLEAN DEFAULT false,
    -- "read" is a reserved word. don't judge me.
    PRIMARY KEY (id)
);