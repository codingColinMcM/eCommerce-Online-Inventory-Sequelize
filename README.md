# eCommerce-Online-Store-Sequelize

## Description

### Problem:
Creating a secure and efficient backend for an online store where customers can shop for products requires implementing security measures to prevent 
potential attacks like SQL injection, as well as providing advanced search capabilities and real-time updates to enhance the shopping experience.

### Solution:
To address these challenges, this repository contains the backend developed using Node.js and Express.js, with Sequelize used to store and manipulate data 
in four tables: category, product, tag, and product-tag. HTTP requests were used to display, add, update, and delete data with GET, POST, PUT, and DELETE 
routes respectively. In the near future, advanced search capabilities and real-time updates will be added to the backend to enhance the shopping experience 
for customers. Additionally, security measures such as bcrypt and a JWT library will be implemented to ensure the security of the backend. With these 
solutions in place, customers can shop with confidence and enjoy a seamless experience on the online store.

## Installation 

npm init -y
npm install express sequelize mysql2 dotenv
mysql -u root -p
source db/schema.sql
quit
npm run seed 
npm start

## Screenshot

![image](https://user-images.githubusercontent.com/112663656/216521080-b8715e4d-ff57-4dc3-bf47-58db92542cfd.png)


## Demo Video

https://drive.google.com/file/d/1XdVn1MfiiEsmpfYC9HA0WPymaHQdRvsc/view?usp=share_link 
