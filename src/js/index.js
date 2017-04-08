$(".cross").hide();
$("section").hide();
$(".hamburger").click(function() {
	$("section").slideToggle("fast", function() {
		$(".hamburger").hide();
		$(".cross").show();
	});
});

$(".cross").click(function() {
	$("section").slideToggle("fast", function() {
		$(".cross").hide();
		$(".hamburger").show();
	});
});

// function doFirst() {
// 	canvas.

// }

// window.addEventListener("load", doFirst());