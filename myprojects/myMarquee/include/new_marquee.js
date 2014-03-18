$(document).ready(function(){
	$('img.marquee_panel_photo').each(function(index){
	var	photowidth = $('.marquee_container').width();
	var	photoposition = index*photowidth;
		//$('marquee_photos').append('<img class="marquee_photo"  style="left:'+photoposition+'" src="'+$(this).attr('src')+'" width="700" height="350">');
		
		$('.marquee_photos').append('<img class="marquee_photo" style="left: '+photoposition+'" src="'+$(this).attr('src')+'" alt="'+$(this).attr('alt')+'" width="1000" height="600" />');
	
		$('.marquee_photos').css('width', photoposition+photowidth);
	});
	$('.marquee_panels .marquee_panel').each(function(){
		$('.marquee_nav').append('<a class="marquee_nav_item"></a>');
	});
	
	$('a.marquee_nav_item').click(function(){
		$('a.marquee_nav_item').removeClass('selected');
		$(this).addClass('selected');
		
		
			var navClicked = $(this).index();
		var marqueeWidth = $('.marquee_container').width();
		var distanceToMove = marqueeWidth*(-1);
		var newPhotoPosition = navClicked*distanceToMove + 'px';
		//var newCaption = $('.marquee_panel_caption').get(navClicked);
			var newCaption = $('.marquee_panel_caption').get(navClicked);
		// Animate the photos and caption
		$('.marquee_photos').animate({left: newPhotoPosition}, 1000);
		
		$('.marquee_caption').animate({top: '660px'}, 500, function(){
			var newHTML = $(newCaption).html();
			$('.marquee_caption_content').html(newHTML);
			setCaption();
		});
		
	});
intialize();
setCaption();
});


function intialize(){
	$('.marquee_caption_content').html($('.marquee_panels .marquee_panel:first .marquee_panel_caption').html());
	
};
function setCaption(){
	
	
	
	var captionHeight = $('.marquee_caption').height();
	var marqueeHeight = $('.marquee_container').height();
	var newCaptionTop = marqueeHeight - captionHeight - 15;
	$('.marquee_caption').delay(100).animate({top: newCaptionTop}, 500);
}