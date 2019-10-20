var main = function() {
    "use strict";
    $(".comment-input button").on("click", function(e) {
	var $new_comment;
	if($(".comment-input input").val() !== "") {
	    $new_comment = $("<p>").text($(".comment-input input").val());
	    $new_comment.hide();
	    $(".comments").append($new_comment);
	    $new_comment.fadeIn();
	    $(".comment-input input").val("");
	    
	}
    });
    $(".comment-input input").on("keypress", function(e) {
	if(e.keyCode === 13) {
	    var $new_comment;
	    if($(".comment-input input").val() !== "") {
		$new_comment = $("<p>").text($(".comment-input input").val());
		$new_comment.hide();
		$(".comments").append($new_comment);
		$new_comment.fadeIn();
		$(".comment-input input").val("");
		
	    }
	}
    });

    var $newUL = $("<ul>");
    var $newParagraphElement = $("<p>");
    $newParagraphElement.text("this is a paragraph");
    $("footer").append($newParagraphElement);
};

$(document).ready(main);
