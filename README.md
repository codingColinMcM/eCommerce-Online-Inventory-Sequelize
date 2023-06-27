# eCommerce-Online-Inventory-Sequelize

I am quite upset that 

## Description

### Problem:
eCommerce sites need a reliable and efficient way to manage their back end. This includes 
setting up an Express.js API and connecting it to a MySQL database using Sequelize, a powerful ORM tool.

### Solution:
To solve this problem, I have built the back end for an e-commerce site by configuring a working Express.js API to use Sequelize to interact with a MySQL 
database. This involved:

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
- [Screenshot](#screenshot)
- [Demo Video](#demo)
- [License](#license)
- [Questions?](#quest)

## Overview 

The application is organized into several files and folders:

* The config folder contains the connection.js file, which sets up the Sequelize 
configuration for the MySQL database.

* The db folder contains the schema.sql file, which creates the initial MySQL database 
schema.

* The models folder contains the Sequelize models for the different data entities in the e-
commerce site, such as products, categories, and tags.

* The routes folder contains the API routes for the application, which allow developers to 
interact with the data entities in the MySQL database.

* The seeds folder contains data that is used to seed the development database with test 
data.

* LICENSE: This file contains the license agreement for the eCommerce application. It is licensed under the MIT License.

* README.md: This is the README file for the eCommerce application, which provides information about the application, including how to install and use it.

The application has four models: Category, Product, Tag, and ProductTag. The Product model 
belongs to many Tag models, and the Tag model belongs to many 
Product models. Using the ProductTag model allows products to have multiple tags, and tags 
to have many products.

The application uses a dotenv file to store environment variables required for connecting 
to the MySQL database using Sequelize, such as the database 
name, username, and password. By storing these variables in a dotenv file, the application code 
can remain agnostic to the specific configuration details of the 
database, making it more modular and easier to maintain.

In addition to the API routes, the application also has controllers that handle the data 
returned by the Sequelize models and send it to the client-side.

Overall, this e-commerce application provides online store owners with a clear and 
straightforward way to set up an Express.js API using Sequelize and
interact with a MySQL database.

## Installation 

To run this project, install the necessary npm packages by using:

```
npm install
```

## Usage

To set up the data base to be populated with the seed data, execute the following commands:

```
mysql -u root -p
source db/schema.sql
quit
```

To seed the database with data, run the following command:

```
npm run seed 
```

Finally, you can run the application using the command: 

```
npm start
```

## Screenshot

![image](https://user-images.githubusercontent.com/112663656/216521080-b8715e4d-ff57-4dc3-bf47-58db92542cfd.png)


## Demo Video <a name="demo"></a>

<a href="https://drive.google.com/file/d/1XdVn1MfiiEsmpfYC9HA0WPymaHQdRvsc/view?usp=share_link">eCommerce Demonstration</a> 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<pre>
The MIT License

© Colin McMurtray University at North Carolina Chapel Hill Coding Bootcamp MIT License Copyright (c) 2023 Permission is hereby granted, free of charge, to 
any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to 
whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
</pre>

## Questions? <a name="quest"></a>

If you have any questions, please reach out to me using one of the following:

- [Email](mailto:mcmurtraycolin@gmail.com)
- [GitHub Profile](https://github.com/codingColinMcM)
