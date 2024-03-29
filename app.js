var tabSelector = function(tabNum) {
    "use strict";
    var tabString1 = ".tabs a:nth-child(";
    var tabString2 = ")"
    $(tabString1+tabNum+tabString2).on("click", function() {
	$(".tabs span").removeClass("active");
	$(tabString1+tabNum+tabString2+" span").addClass("active");
	$("main .content").empty();
	return false;
    });
};

var main = function() {
    "use strict";
    tabSelector(1);
    tabSelector(2);
    tabSelector(3);
    
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
    var $nextULThing = ulCreator(6);
    $(".comments").append($nextULThing);
    
};

var ulCreator = function(numLi) {
    var $ulThing = $("<ul>");
    var i = 0;
    for(i = 0; i<numLi; i++) {
	var $liThing = $("<li>").text("this is a li thing");
	$ulThing.append($liThing);
    }
    return $ulThing;
}

$(document).ready(main);
