CREATE DATABASE nodedb;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'root';
USE nodedb;
CREATE TABLE IF NOT EXISTS people (id integer auto_increment, name VARCHAR(255), PRIMARY KEY  (id));