$('.slider').bxSlider({
	captions: true,
});


$('.footer_icon .icon2').click(function(){
$('.icon_info h3').html("javascript");
$('.footer_wrapper .icon_info').css(
	"clip-path","polygon(7% 0, 80% 0%, 100% 0, 100% 100%, 7% 100%, 7% 65%, 0 49%, 7% 33%)"
)
$('.footer_icon .icon2').css('background-color','orange')
$('.footer_icon .icon1').css('background-color','black')
$('.footer_icon .icon3').css('background-color','black')
})
$('.footer_icon .icon1').click(function(){
$('.icon_info h3').html("Web Design");
$('.footer_wrapper .icon_info').css(
	"clip-path","polygon(7% 0, 80% 0%, 100% 0, 100% 100%, 7% 100%, 7% 33%, 0 20%, 7% 11%)"
)
$('.footer_icon .icon2').css('background-color','black')
$('.footer_icon .icon1').css('background-color','orange')
$('.footer_icon .icon3').css('background-color','black')
})
$('.footer_icon .icon3').click(function(){
$('.icon_info h3').html("Jquery");
$('.footer_wrapper .icon_info').css(
	"clip-path","polygon(6% 0, 80% 0%, 100% 0, 100% 100%, 6% 100%, 6% 90%, 0 81%, 6% 65%)"
)
$('.footer_icon .icon2').css('background-color','black')
$('.footer_icon .icon1').css('background-color','black')
$('.footer_icon .icon3').css('background-color','orange')
})