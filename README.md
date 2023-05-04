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

By following these steps, I was able to create a reliable and efficient back end for the e-commerce site, with the ability to manage data using Sequelize and MySQL. This solution provides developers with a clear and straightforward way to set up an Express.js API using Sequelize and interact with a MySQL database.

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
