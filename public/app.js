    // Test Click Handler for submitButton
    // $("#submitButton").click(function (req, res) {
    //     $.ajax({
    //         method: "GET",
    //         url: "/scrape"
    //     });
    //     res.redirect("/");
    //     location.reload();
    // });

    // Click handler for saveArticle button
    $("#saveArticle").click(function (req, res) {
        var thisID = {
            _id: req.params.id
        };
    
        // Save to Database
        $.ajax({
        url: "/articles/" + thisID,
        type: "PUT",
        data: thisID,
        });
        // Redirect to homepage
        res.redirect("/")
    });
    
    // Click handler for Notes button
    $(document).on("click", "#notesclick", function() {

        // Empty the notes from the note section
        $("#notes").empty();

        // Save the id from this
        var thisId = $(this).attr("data-id");
    
        // Ajax call for the Article
        $.ajax({
        method: "GET",
        url: "/articles/" + thisId
        })
        // Once done, add the note information to the page
        .then(function(data) {

            console.log(data);

            // The title of the article
            $("#notes").append("<h4>" + data.title + "</h4>");
            // An input to enter a new title for notes
            $("#notes").append("<input id='titleinput' name='title'>");
            // A textarea to add a new note
            $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
            // Button to submit a new note, with the id of the article saved to it
            $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
    
            // If there's already a note in the article
            if (data.note) {

            // Place the title of the note in the title input
            $("#titleinput").val(data.note.title);

            // Place the body of the note in the body textarea
            $("#bodyinput").val(data.note.body);
            };
        });
    });
    
    // Click handler for save note button 
    $(document).on("click", "#savenote", function() {

        // Grab the id associated with the article from the submit button
        var thisId = $(this).attr("data-id");
    
        // Ajax POST request - change note to what's entered
        $.ajax({
        method: "POST",
        url: "/articles/" + thisId,
        data: {
            // Value taken from title input
            title: $("#titleinput").val(),
            // Value taken from note textarea
            body: $("#bodyinput").val()
        }
        })
        // Once data has posted, then...
        .then(function(data) {
            // Log response data
            console.log(data);
            // Empty the notes section
            $("#notes").empty();
        });
    
        // Empty text entered in the notes area after post, to clear for next entry
        $("#titleinput").val("");
        $("#bodyinput").val("");
    });
