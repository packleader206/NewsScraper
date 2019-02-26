// Import the model 
var db = require("../models");

//Require express
var express = require("express");

//Require mongojs
var mongojs = require("mongojs");

//Scraping tools
var cheerio = require("cheerio");
var axios = require("axios");

module.exports = function(app) {
    // A GET route for scraping 
app.get("/scrape", function (req, res) {
    // First, we grab the body of the html with request
    axios.get("http://www.espn.com/mma/").then(function (response) {
      // Load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
      var results = [];
      // Grab sepecified elements that we want for each article
      $(".contentItem__content").each(function (i, element) {
        // Save an empty result object
        var result = {};
  
        // Specifies the data that we want to extract
        result.title = $(this).find(".contentItem__title").text();
         
        result.summary = $(this).find(".contentItem__subhead").text();

        result.link = "http://www.espn.com" + $(this).find("a").attr("href");

        console.log("result: " + result.title)
        results.push(result);
        // Create a new Article using the `result` object built from scraping
        db.Article.create(result)
          .then(function (dbArticle) {
            // View the added result in the console
            console.log("database" + dbArticle)
            results.push(dbArticle);
          })
          .catch(function (err) {
            // If an error occurred, send it to the client
            return res.json(err);
          });
      });
    });
  });
}