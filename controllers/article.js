// Import the model 
var db = require("../models");

//Require express
var express = require("express");

//Require mongojs
var mongojs = require("mongojs");

// DB.connect(process.env.PROD_MONGODB)
// Routes
module.exports = function(app) {
    // Index Route
    app.get("/", function (req, res) {
        db.Article.find({})
        .then(function (data) {
            var hbsObject = {
            Article: data
            };
            res.render("index", hbsObject)
        })
        .catch(function (err) {
        // If an error occurs, send the error back to the client
        res.json(err);
      });
    });

    // Route for Saved articles 
    app.get("/saved", function (req, res) {
        db.Article.find({})
        .then(function (data) {
            var hbsObject = {
            Article: data
            };
        res.render("saved", hbsObject)
        })
        .catch(function (err) {
        // If an error occurs, send the error back to the client
        res.json(err);
      });
    });

    // Route to update articles
    app.put("/articles/:id", function (req, res) {
        db.Article.update({ _id: req.params.id }, {$set: { saved: true }})
        .then(function (dbArticle) {
            res.redirect("/")
        })
        .catch(function (err) {
            res.json(err);
        })
    });


    // Route for getting all Articles from the db
    app.get("/articles", function (req, res) {
    // Grab every document in the Articles collection
        db.Article.find({})
        .then(function (dbArticle) {
        // If successfully found Articles, send them back to the client
            res.json(dbArticle);
        })
        .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
        });
    });
};