
$(document).ready(function() {

$("h1.jumbo1").mouseleave(function() {
	$("h1.jumbo1").slideDown("slow");
});

$("h1.jumbo1").mouseenter(function() {
	$("h1.jumbo1").slideUp("slow");
});

$("p.jumbo").mouseenter(function() {
	$("p.jumbo").slideUp("slow");
});

$("p.jumbo").mouseleave(function() {
	$("p.jumbo").slideDown("slow");
});

$("p").mouseenter(function() {
	$(this).hide("slow");
});

$("p").mouseleave(function() {
	$(this).show("slow");
});

});



