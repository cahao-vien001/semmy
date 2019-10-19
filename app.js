var main = function() {
    "use strict";
    $(".comment-input button").on("click", function(e) {
	var $new_comment = $("<p>");
	var comment_text = $(".comment-input input").val();
	$new_comment.text(comment_text);
	$(".comments").append($new_comment);
	$(".comment-input input").val("");
	//console.log("Hello World!");
	//$(".comments").append("<p>this is a new comment</p>");
    });
    $(".comment-input input").on("keypress", function(e) {
	if(e.keyCode === 13) {
	    var $new_comment = $("<p>");
	    var comment_text = $(".comment-input input").val();
	    $new_comment.text(comment_text);
	    $(".comments").append($new_comment);
	    $(".comment-input input").val("");
	    //console.log("Hello World!");
	    //$(".comments").append("<p>this is a new comment</p>");
	}
    });
};

$(document).ready(main);
