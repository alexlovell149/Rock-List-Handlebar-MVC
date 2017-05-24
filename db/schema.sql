CREATE DATABASE bandsdb;

USE bandsdb;

CREATE TABLE bands (
id INT NOT NULL AUTO_INCREMENT,
band_name VARCHAR(250) NOT NULL,
hall_of_fame BOOLEAN default false,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)

);