# eCommerce-Online-Store-Sequelize

## Description

### Problem:
eCommerce sites need a reliable and efficient way to manage their back end. This includes setting up an Express.js API and connecting it to a MySQL database using Sequelize, a powerful ORM tool.

### Solution:
To solve this problem, I have built the back end for an e-commerce site by configuring a working Express.js API to use Sequelize to interact with a MySQL database. This involved:

1. Adding the necessary environment variables to the project and setting up the Sequelize configuration file.

2. Defining Sequelize models for the different data entities in the e-commerce site, such as products, categories, and tags.

3. Creating and running database migrations to update the MySQL database schema.

4. Seeding the development database with test data.

5. Testing the API routes using Insomnia Core to ensure that they function correctly.

By following these steps, I was able to create a reliable and efficient back end for the e-commerce site, with the ability to manage data using Sequelize 
and MySQL. This solution provides developers with a clear and straightforward way to set up an Express.js API using Sequelize and interact with a MySQL 
database.

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Overview 

This e-commerce application is built using Node.js and Express.js and uses Sequelize, a powerful ORM tool, to interact with a MySQL database. The 
application provides a reliable and efficient way to manage the back-end of an e-commerce site.

The application is organized into several folders:

The config folder contains the connection.js file, which sets up the Sequelize configuration for the MySQL database.

The db folder contains the schema.sql file, which creates the initial MySQL database schema.

The models folder contains the Sequelize models for the different data entities in the e-commerce site, such as products, categories, and tags.

The routes folder contains the API routes for the application, which allow developers to interact with the data entities in the MySQL database.

The seeds folder contains data that is used to seed the development database with test data.

The application has four models: Category, Product, Tag, and ProductTag. The Product model belongs to many Tag models, and the Tag model belongs to many 
Product models. Using the ProductTag model allows products to have multiple tags, and tags to have many products.

The application uses a dotenv file to store environment variables required for connecting to the MySQL database using Sequelize, such as the database name, 
username, and password. By storing these variables in a dotenv file, the application code can remain agnostic to the specific configuration details of the 
database, making it more modular and easier to maintain.

In addition to the API routes, the application also has controllers that handle the data returned by the Sequelize models and send it to the client-side.

Overall, this e-commerce application provides developers with a clear and straightforward way to set up an Express.js API using Sequelize and interact with a MySQL database.

## Installation 

```
npm init -y
npm install express sequelize mysql2 dotenv
mysql -u root -p
source db/schema.sql
quit
npm run seed 
npm start
```

## Screenshot

![image](https://user-images.githubusercontent.com/112663656/216521080-b8715e4d-ff57-4dc3-bf47-58db92542cfd.png)


## Demo Video

https://drive.google.com/file/d/1XdVn1MfiiEsmpfYC9HA0WPymaHQdRvsc/view?usp=share_link 
