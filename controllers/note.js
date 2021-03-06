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
    // Route for grabbing a specific Article by id & populate it with it's note
app.get("/articles/:id", function (req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the match in our DB.
    db.Article.findOne({ _id: req.params.id })
      // Populate the note
      .populate("note")
      .then(function (dbArticle) {
        // If article with the given id is found, send response to client
        res.json(dbArticle);
      })
      .catch(function (err) {
        // If error, send to client
        res.json(err);
      });
  });
  
  // Route for saving/updating an Article's associated Note
  app.post("/articles/:id", function (req, res) {
    // Create a new note and pass the req.body to the entry
    db.Note.create(req.body)

      .then(function (dbNote) {
        // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
      })
      .then(function (dbArticle) {
        // If update was successful, send response to client
        res.json(dbArticle);
      })
      .catch(function (err) {
        // If an error, send to client
        res.json(err);
      });
  });
};