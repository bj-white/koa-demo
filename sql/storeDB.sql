create database storeDB;
use storeDB;
create table user(
  id int primary key auto_increment,
  usercode varchar(40) not null,
  password varchar(40) not null
);
