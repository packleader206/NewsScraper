# MMA News Scraper

## Overview:

MMA News Scraper is a full stack application that allows users to scrape the latest Mixed Martial Arts headlines from ESPN.com.  It utilizes Node & MongoDB to query and route data to the app and Express Handlebars to generate the HTML.

## Technologies Used:
- HTML
- CSS
- Javascript
- Node.js
- MongoDB
- MongoJS
- Mongoose
- Axios
- Cheerio
- Express
- Handlebars
- Body-Parser
- Method-Override
- Morgan

## Author:
<strong>Al Young</strong>

<hr>

## [Click for a Live Demo](https://lit-brook-98449.herokuapp.com/)

## Local Setup:

To run this application locally, you will need <a href="https://nodejs.org/en/download/">Node JS</a> and <a href="https://docs.mongodb.com/manual/installation/">MongoDB</a> installed on your computer.

<strong>MongoDB Setup:</strong>

Once you have MongoDB installed, you will need to create a database called "newsscraper". To do this, go to your command prompt and start the server by entering the command "mongod".  Then, open up another cmd prompt window and enter the following:

          1. mongo ENTER
          2. use newsscraper ENTER

<strong>Once you have the newsscraper database set up, run the following commands at your command prompt:</strong>

           1. git clone https://github.com/packleader206/NewsScraper.git ENTER
           
           2. cd newsscraper ENTER
           
           3. npm install ENTER           
                      
           
## Running the App:

           1.  Using your cmd prompt, navigate to the "newsscraper" directory that you cloned in the previous step.
           
           2.  Run the command "node server.js" to start the server.
           
           3. Then, open up your browser and go to http://localhost:3000


## Using the App:

Users can retrieve the latest Mixed Martial Arts news stories from ESPN.com by hitting "Scrape" button.  Each article displays the headline and a brief summary of the article's content, and users can navigate to and read the full news story by clicking on the Title. Users also have the ability to Save articles of their choosing and access those articles by navigating to the Saved articles page. Users also have the ability to add and save notes for each news article. 

## Screenshots:

