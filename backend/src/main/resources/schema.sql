DROP TABLE IF EXISTS Product;

create table Product (
id bigint(10) AUTO_INCREMENT  PRIMARY KEY,
name varchar(100) not null,
price bigint not null,
category varchar(100) not null,
image varchar(100) not null,
brand varchar(100) not null,
rating bigint not null,
num_reviews bigint not null
);