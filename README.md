# Dashcommerce Test

This repository is intended to complete question 6

## Running Locally

To run this application locally you will need to have Node 16.14.0 installed. With the node installed, open the terminal and execute the following commands:

``
npm i express
``

``
node index.js
``

The application will be running at the url: http://localhost:3000

And to see the message: 

``
{
  "mensagem": "My full name is Yan Andrade. I want this job!"
}
``

Acess: http://localhost:3000/dashcommercetest?user="dashcommerce"&password="chooseme"

To get this message:

``
{
  "mensagem": "Wrong credentials"
}
``

Acess: http://localhost:3000/dashcommercetest?user=""&password=""