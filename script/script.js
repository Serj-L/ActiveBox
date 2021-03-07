/* testimonials slider */
$(document).ready(function() {
	$('#slider-btn-1').click(function(event) {
        $('#slider-btn-1').addClass("active")
		$("#customer-1").addClass("testimonials__customer-img--active")
        $("#review-1").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-1").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-1").removeClass("customers-review-wrapper--active")
	});
});
$(document).ready(function() {
	$('#slider-btn-2').click(function(event) {
        $('#slider-btn-2').addClass("active")
		$("#customer-2").addClass("testimonials__customer-img--active")
        $("#review-2").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-2").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-2").removeClass("customers-review-wrapper--active")
	});
});
$(document).ready(function() {
	$('#slider-btn-3').click(function(event) {
        $('#slider-btn-3').addClass("active")
		$("#customer-3").addClass("testimonials__customer-img--active")
        $("#review-3").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-3").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-3").removeClass("customers-review-wrapper--active")
	});
});
$(document).ready(function() {
	$('#slider-btn-4').click(function(event) {
        $('#slider-btn-4').addClass("active")
		$("#customer-4").addClass("testimonials__customer-img--active")
        $("#review-4").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-4").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-4").removeClass("customers-review-wrapper--active")
	});
});
$(document).ready(function() {
	$('#slider-btn-5').click(function(event) {
        $('#slider-btn-5').addClass("active")
		$("#customer-5").addClass("testimonials__customer-img--active")
        $("#review-5").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-5").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-5").removeClass("customers-review-wrapper--active")
	});
});
/* /testimonials slider */