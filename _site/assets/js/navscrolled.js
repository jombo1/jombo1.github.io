$(function () {
  $(document).scroll(function () {
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		
	});
});

var $nav = $(".fixed-top");
$('.navbar').on('show.bs.collapse', function () {
	$nav.addClass('scrolled');
});