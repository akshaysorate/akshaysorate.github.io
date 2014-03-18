var thumbnailSpacing=10;
(function() {

	$('a.sortedlinks').on('click',function(e){
		e.preventDefault();
        $('a.sortedlinks').removeClass('selected'); 
		$(this).addClass('selected');
		var keyword = $(this).attr('data-keyword');
		sort(keyword);
	});
	$('a.thumbnail').addClass('showMe').addClass('fancybox').attr('rel','group');
	
	positionimages();
})();


function positionimages(){
	$('.debug-remainder').html('');
	$('.photos a.thumbnail.hideMe').animate({opacity:0},500,function(){
		$(this).css({'display':'none','top':'0px','left':'0px'});
	});


	
    var containerWidth = $('.photos').width();
	var thumbnail_R = 0;
	var thumbnail_C = 0;
	var thumbnailWidth = $('a.thumbnail img:first-child').outerWidth()+window.thumbnailSpacing;
	var thumbnailHeight = $('a.thumbnail img:first-child').outerHeight()+window.thumbnailSpacing;
	var max_C = Math.floor( containerWidth / thumbnailWidth);
	//$('.debug-remainder').append(max_C+'-')
	//$('.debug-remainder').append(containerWidth+'-');
	//$('.debug-remainder').append(thumbnailWidth+'-');
	//$('.debug-remainder').append(thumbnailHeight+'-');
		//$('.debug-remainder').append(max_C);
	$(' a.thumbnail.showMe').each(function(index){
	var remainder = (index%max_C)/100;
	//$('.debug-remainder').append(index+' - ');
	//$('.debug-remainder').append(remainder+' - ');
	
	var maxIndex = 0;
		if(remainder==0){
			if(index !=0){
				thumbnail_R += thumbnailHeight;
				//$('.row').append(thumbnail_R+'-');
				//$('.row').append(index+' - ');
				
			}
			//$('.row').append(thumbnail_R+'-');
			//$('.row').append(index+' - ');
				
			
				//$('.debug-remainder').append(+thumbnail_C+' - ');
			thumbnail_C = 0;
		}else{
			thumbnail_C += thumbnailWidth;
			
		//$('.col').append(thumbnail_C+' - ');
		  // $('.col').append(index+' - ');
		}
        	
  	        
	$(this).css('display','block').animate({
			'opacity':1,
			'top': thumbnail_R+'px',
			'left': thumbnail_C+'px'
		}, 500);

   
		/*var newWidth = max_C * thumbnailWidth;
		$('.row').append(thumbnail_R+'-');
		var newHeight = thumbnail_R + thumbnailHeight;
		//$('.row').append(newWidth+'-');
		//$('.col').append(newHeight+'-');
		$('.thumbnail_container').css({'width':newWidth+'px','height':newHeight+'px'});
	*/
	});
	fancyboxdetection();
	
	};    	
      
	

function sort(keyword){
		$('.photos a.thumbnail').each(function() {
				
        var thumbnailKeywords = $(this).attr('data-keywords');
		if(keyword == 'all'){
			$(this).addClass('showMe').removeClass('hideMe').attr('rel','group');
		}else{
			
			if(thumbnailKeywords.indexOf(keyword) != -1){
				$(this).addClass('showMe').removeClass('hideMe').attr('rel','group');
			}else{
				$(this).addClass('hideMe').removeClass('showMe').attr('rel','none');
			}
		}
    });
	
	positionimages();
	
	};
	
function fancyboxdetection(){	
$('a.fancybox[rel="group"]').fancybox({
		'transitionIn' : 'elastic',
		'transitionOut' : 'elastic',
		'titlePosition' : 'over',
		'speedIn' : 500,
		'overlayColor' : '#000',
		'padding' : 0,
		'overlayOpacity' : .75
		
	});
};