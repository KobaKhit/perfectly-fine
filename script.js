$(document).ready(function(){

	// $.getJSON("./data.json", function(json) {
	//     console.log(json); // this will show the info it in firebug console
	//     var jsonString = JSON.stringify(data);
	//     console.log('complete')
	// });


	$(".tab_1").click(function() {
		$('#page_1').slideDown('fast');
		$(".close_tab_1").fadeIn('normal');
		$('.item_2, .item_3, .item_4, .item_5').slideUp('normal');
			$(".close_tab_1, #page_1").click(function() {
				$(".close_tab_1").fadeOut('normal');
				$('#page_1').slideUp('fast');
				$('.item_2, .item_3, .item_4, .item_5').slideDown('normal');
			});
	});

	$(".tab_2").click(function() {
		$('#page_2').slideDown('fast');
		$(".close_tab_2").fadeIn('normal');
		$('.item_2, .item_3, .item_4, .item_5').slideUp('normal');
			$(".close_tab_2, #page_2").click(function() {
				$(".close_tab_2").fadeOut('normal');
				$('#page_2').slideUp('fast');
				$('.item_2, .item_3, .item_4, .item_5').slideDown('normal');
			});
	});

	$(".tab_3").click(function() {
		$('#page_3').slideDown('fast');
		$(".close_tab_3").fadeIn('normal');
		$('.item_1, .item_2, .item_4, .item_5').slideUp('normal');
			$(".close_tab_3").click(function() {
				$(".close_tab_3").fadeOut('normal');
				$('#page_3').slideUp('fast');
				$('.item_1, .item_2, .item_4, .item_5').slideDown('normal');
			});
	});

		$(".tab_4").click(function() {
		$('#page_4').slideDown('fast');
		$(".close_tab_4").fadeIn('normal');
		$('.item_2, .item_3, .item_4, .item_5').slideUp('normal');
			$(".close_tab_4, #page_4").click(function() {
				$(".close_tab_4").fadeOut('normal');
				$('#page_4').slideUp('fast');
				$('.item_2, .item_3, .item_4, .item_5').slideDown('normal');
			});
	});

	$(".tab_5").click(function() {
		$('#page_5').slideDown('fast');
		$(".close_tab_5").fadeIn('normal');
		$('.item_1, .item_2, .item_3, .item_4').slideUp('normal');
			$(".close_tab_5").click(function() {
				$(".close_tab_5").fadeOut('normal');
				$('#page_5').slideUp('fast');
				$('.item_1, .item_2, .item_3, .item_4').slideDown('normal');
			});
	});

	$(".tab_6").click(function() {
		$('#page_6').slideDown('fast');
		$(".close_tab_6").fadeIn('normal');
		$('.item_1, .item_2, .item_3, .item_4').slideUp('normal');
			$(".close_tab_6").click(function() {
				$(".close_tab_6").fadeOut('normal');
				$('#page_6').slideUp('fast');
				$('.item_1, .item_2, .item_3, .item_4').slideDown('normal');
			});
	});

	$(".tab_7").click(function() {
		$('#page_7').slideDown('fast');
		$(".close_tab_7").fadeIn('normal');
		$('.item_1, .item_2, .item_3, .item_4').slideUp('normal');
			$(".close_tab_7").click(function() {
				$(".close_tab_7").fadeOut('normal');
				$('#page_7').slideUp('fast');
				$('.item_1, .item_2, .item_3, .item_4').slideDown('normal');
			});
	});

	$(".tab_8").click(function() {
		$('#page_8').slideDown('fast');
		$(".close_tab_8").fadeIn('normal');
		$('.item_1, .item_2, .item_3, .item_4').slideUp('normal');
			$(".close_tab_8").click(function() {
				$(".close_tab_8").fadeOut('normal');
				$('#page_8').slideUp('fast');
				$('.item_1, .item_2, .item_3, .item_4').slideDown('normal');
			});
	});

	$(document).ready(function(){
	  $(".tab_").click(function(){
	    $("#page_").animate({
	      width: "toggle"});
	    });
	      $(".close_tab_").click(function(){
	    $("#page_").animate({
	      width: "toggle"
	    });
	  });
	});

	const $logo = $("#logo")

	const circumfence = Math.PI * $logo.height()
	const degreePerPixel = circumfence / 260
	$('section').scroll(event => {
		const degrees = Math.round(event.target.scrollLeft / degreePerPixel)
		$logo.css("transform", `rotate(${degrees}deg)`)
	})

});

