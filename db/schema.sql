DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(128) NOT NULL,
    devoured BOOLEAN Default false,
    PRIMARY KEY(id)  
);