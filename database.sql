

/*Entering this in the SQL query terminal on phpMyAdmin should create the database for the email list*/
CREATE DATABASE 'database';

CREATE TABLE 'user'(
    'id' INT NOT NULL AUTO_INCREMENT,
    'name' VARCHAR(100) NOT NULL,
    'email' VARCHAR(100) NOT Null,
    PRIMARY KEY('id')
) ENGINE = InnoDB;