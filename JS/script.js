
$(document).ready(function() {
	$("button_1").mouseenter(function() {
	$("button_1").fadeTo("slow",0.5);
});

$("h1.jumbo1").mouseenter(function() {
	$("h1.jumbo1").fadeIn("slow").fadeOut("slow");
});

$("h1.jumbo1").mouseleave(function() {
	$("h1.jumbo1").fadeOut("slow").fadeIn("slow");
});

$("p.jumbo").mouseenter(function() {
	$("p.jumbo").slideToggle("slow");
});

$("p.jumbo").mouseleave(function() {
	$("p.jumbo").slideToggle("slow");
});

$("p").mouseenter(function() {
	$(this).hide("slow");
});

$("p").mouseleave(function() {
	$(this).show("slow");
});

});



