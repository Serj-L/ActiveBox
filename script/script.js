 /* scroll up */
 var scrbtn = $(".scroll-up-btn");

 $(window).scroll(function() {
   if ($(window).scrollTop() > 100) {
     scrbtn.addClass("active");
   } else {
     scrbtn.removeClass("active");
   }
 });

 scrbtn.on("click", function(e) {
   e.preventDefault();
   $("html, body").animate({scrollTop:0}, "100");
 });
/* /scroll up */

/* scroll-bar width calculation*/
const getscrollbarWidth = () => {
    const outer = document.createElement("div");

    outer.style.position = "adsolute";
    outer.style.top = "-9999px";
    outer.style.width = "50px";
    outer.style.height = "50px";
    outer.style.overflow = "scroll";
    outer.style.visibility = "hidden";
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
}
/* /scroll-bar width calculation*/

$(document).ready(function() {
    /* burger menu */
	$(".header__burger-btn").click(function(event) {
		$(".header__burger-btn, .header__nav").toggleClass("active")
        if($(".header__nav").hasClass("active"))
        $(".header__nav-logo-wrapper").css({"padding-right": getscrollbarWidth}),
        $("body").css({"padding-right": getscrollbarWidth}),
        $(".header__nav-link").click(function(event) {
            $(".header__burger-btn, .header__nav").removeClass("active")
            $("body").removeClass("lock")
            $("body").css({"padding-right": ""})
            $(".header__nav-logo-wrapper").css({"padding-right": ""})
        }),
        $(window).resize(function() {
            $(".header__burger-btn, .header__nav").removeClass("active")
            $("body").removeClass("lock")
            $("body").css({"padding-right": ""})
            $(".header__nav-logo-wrapper").css({"padding-right": ""})
        })
        else ($(".header__nav-logo-wrapper").css({"padding-right": ""})),
        $("body").css({"padding-right": ""})
        $("body").toggleClass("lock")
	});
    /* /burger menu */

    /* testimonials slider */
    $("#slider-btn-1").click(function(event) {
        $("#slider-btn-1").addClass("active")
		$("#customer-1").addClass("testimonials__customer-img--active")
        $("#review-1").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-1").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-1").removeClass("customers-review-wrapper--active")
	});
    $("#slider-btn-2").click(function(event) {
        $("#slider-btn-2").addClass("active")
		$("#customer-2").addClass("testimonials__customer-img--active")
        $("#review-2").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-2").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-2").removeClass("customers-review-wrapper--active")
	});
    $("#slider-btn-3").click(function(event) {
        $("#slider-btn-3").addClass("active")
		$("#customer-3").addClass("testimonials__customer-img--active")
        $("#review-3").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-3").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-3").removeClass("customers-review-wrapper--active")
	});
    $("#slider-btn-4").click(function(event) {
        $("#slider-btn-4").addClass("active")
		$("#customer-4").addClass("testimonials__customer-img--active")
        $("#review-4").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-4").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-4").removeClass("customers-review-wrapper--active")
	});
    $("#slider-btn-5").click(function(event) {
        $("#slider-btn-5").addClass("active")
		$("#customer-5").addClass("testimonials__customer-img--active")
        $("#review-5").addClass("customers-review-wrapper--active")
        $(".slider-btn").not($(this)).removeClass("active")
        $(".testimonials__customer-img").not("#customer-5").removeClass("testimonials__customer-img--active")
        $(".customers-review-wrapper").not("#review-5").removeClass("customers-review-wrapper--active")
	});
    /* /testimonials slider */

     /* works slider */
     $("#works-slider-btn-1").click(function(event) {
        $("#works-slider-btn-1").addClass("active")
		$("#work-sample-1").addClass("active")
        $(".works__slider-btn").not($(this)).removeClass("active")
        $(".works__sample").not("#work-sample-1").removeClass("active")
	});
    $("#works-slider-btn-2").click(function(event) {
        $("#works-slider-btn-2").addClass("active")
		$("#work-sample-2").addClass("active")
        $(".works__slider-btn").not($(this)).removeClass("active")
        $(".works__sample").not("#work-sample-2").removeClass("active")
	});
    $("#works-slider-btn-3").click(function(event) {
        $("#works-slider-btn-3").addClass("active")
		$("#work-sample-3").addClass("active")
        $(".works__slider-btn").not($(this)).removeClass("active")
        $(".works__sample").not("#work-sample-3").removeClass("active")
	});
    $("#works-slider-btn-4").click(function(event) {
        $("#works-slider-btn-4").addClass("active")
		$("#work-sample-4").addClass("active")
        $(".works__slider-btn").not($(this)).removeClass("active")
        $(".works__sample").not("#work-sample-4").removeClass("active")
	});
    $("#works-slider-btn-5").click(function(event) {
        $("#works-slider-btn-5").addClass("active")
		$("#work-sample-5").addClass("active")
        $(".works__slider-btn").not($(this)).removeClass("active")
        $(".works__sample").not("#work-sample-5").removeClass("active")
	});
    $("#works-slider-btn-6").click(function(event) {
        $("#works-slider-btn-6").addClass("active")
		$("#work-sample-6").addClass("active")
        $(".works__slider-btn").not($(this)).removeClass("active")
        $(".works__sample").not("#work-sample-6").removeClass("active")
	});
    $("#works-slider-btn-7").click(function(event) {
        $("#works-slider-btn-7").addClass("active")
		$("#work-sample-7").addClass("active")
        $(".works__slider-btn").not($(this)).removeClass("active")
        $(".works__sample").not("#work-sample-7").removeClass("active")
	});
    $("#works-slider-btn-8").click(function(event) {
        $("#works-slider-btn-8").addClass("active")
		$("#work-sample-8").addClass("active")
        $(".works__slider-btn").not($(this)).removeClass("active")
        $(".works__sample").not("#work-sample-8").removeClass("active")
	});
    /* /works slider */
});
