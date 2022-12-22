if(jQuery(window).width() > 991) {
		// Equal Height
	  	var ctatitle = 0;
	  	setTimeout(function(){
	  		jQuery(".two-column-cta .content h4").each(function(){
			 if ($(this).height() > ctatitle) { ctatitle = $(this).height(); }
			});
			jQuery(".two-column-cta .content h4").height(ctatitle);
	  	}, 1000);
	}else{
		jQuery(".two-column-cta .content h4").height("");
	}
jQuery(window).resize(function(){
	jQuery(".two-column-cta .content h4").height("");
	if(jQuery(window).width() > 991) {
	  	var ctatitle = 0;
  		jQuery(".two-column-cta .content h4").each(function(){
		 if ($(this).height() > ctatitle) { ctatitle = $(this).height(); }
		});
		jQuery(".two-column-cta .content h4").height(ctatitle);
	}
});

// adding classname 'active' to current click li 
jQuery(".tabs-accordion-mobile .tab-btn").on('click', function () {
    jQuery(".tab-btn.tab-btn-active").removeClass("tab-btn-active");
    // adding classname 'active' to current click li 
    jQuery(this).addClass("tab-btn-active");
});


$s(window).scroll(function() { // check if scroll event happened
    if ($s(document).scrollTop() > 200) { // check if user scrolled more than 50 from top of the browser window
	
       $s(".top-header-wrap").css({"margin-top": "-45px"});
	  $s("#main-header").css({"margin-top": "0px"});
	  
    } else {
      $s(".top-header-wrap").css({"margin-top": "0px"});
	  $s("#main-header").css({"margin-top": "45px"});
	  
    }
  });

/*=========== padding left according container =============*/
jQuery(document).ready(function() {
  leftrightspace(); 
});
jQuery(window).resize(function() {
    leftrightspace();   
});

function leftrightspace() {    
    var windwidth = $(window).width();
    var containerwidth = $('.container').width();
    var finalspace = (windwidth - containerwidth) / 2
    $('.box-wrap').css('padding-left', finalspace);
}



/*=========== change div order for responsive elements with jquery =============*/
$(window).resize(function() {
  if ($(window).width() <= 500) {
    $('.kutija1').remove().insertAfter($('.kutija2'));
  } else {
    $('.kutija1').remove().insertBefore($('.kutija2'));
  }
})



// jQuery
// Responsive fixed header
// Calculate the height of .header-fixed and apply it as a margin-top to to #main-content on load and resize.

$(document).ready(function() {
  $.resizeContentHeight = function() {
    $('#main-content').css("margin-top", $(".header-fixed").height());
  }
  $(window).load(function() {
    $.resizeContentHeight();
  });
  $(window).resize(function() {
    $.resizeContentHeight();
  });
});


/*=========== Equal Height js =============*/
$.fn.equalHeights = function(){
	var max_height = 0;
	$(this).each(function(){
		max_height = Math.max($(this).height(), max_height);
	});
	$(this).each(function(){
		$(this).height(max_height);
	});
};

$(document).ready(function(){
    $('.product').equalHeights();
});

/*=========== hide menu when click outside js =============*/
$('.nav-toggle').click(function() {
  event.preventDefault();
  event.stopPropagation();
  $('body').toggleClass('mobile-open'); 
});

// Navigation
jQuery(document).on("click", function(event) {
  if (jQuery(event.target).parents(".sidebar-menu").length < 1 && !jQuery(event.target).hasClass("sidebar-menu")) {
      jQuery("body").removeClass("mobile-open");
  }
});


/*your-partners-slider*/
	if (jQuery(window).width() < 767) {
   		jQuery('.your-partners-slider').slick({
		  dots: true,
		  arrows:false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
		});
	}

	//header sticky
if (jQuery(window).width() > 991) {
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 64){  
      jQuery('#header').addClass("sticky");
    }
    else{
      jQuery('#header').removeClass("sticky");
    }
  });
}

  /*onclick Read More and Read Less text change*/  
  jQuery('.read_more_link').click(function(){
    jQuery('.view_content').slideToggle(function(){
        jQuery('.read_more_link').text(function () {
               //change text based on condition
               return jQuery('.view_content').is(":visible") ? "Read Less" : "Read More";
           });
    });
  });

  /*Onclick Read More and Read Less text change self not other*/  
  jQuery('.read_more_link').click(function(){
    jQuery(this).parent().find('.view_content').slideToggle(function(){
        jQuery('.read_more_link').text(function () {
               //change text based on condition
               return jQuery(this).parent().find('.view_content').is(":visible") ? "Read Less" : "Read More";
           });
    });
    jQuery(this).parent().siblings().find('.view_content').slideUp();
  }); 

/*Remove class after click outside the div start here*/
  $('.nav-toggle').click(function() {
    event.preventDefault();
    event.stopPropagation();
    $('body').toggleClass('mobile-open'); 
  });
  
  // Navigation
  jQuery(document).on("click", function(event) {
    if (jQuery(event.target).parents(".sidebar-menu").length < 1 && !jQuery(event.target).hasClass("sidebar-menu")) {
        jQuery("body").removeClass("mobile-open");
    }
  });
  /*Remove class after click outside the div end here*/


// simple accordioan start here
$('.accordian .accordian_title').click(function () {
   $(this).parent().find('.accordian_content').slideToggle();            
   $(this).parent().siblings().find('.accordian_content').slideUp();
   $(this).parent().toggleClass('active_header');
   $(this).parent().siblings().removeClass('active_header');
});  

// <div class="accordian">
//   <div class="accordian_title">About Us</div>
//   <div class="accordian_content">
//     <ul>
//       <li>Footer Link- 1</li>
//       <li>Footer Link- 2</li>
//       <li>Footer Link- 3</li>
//       <li>Footer Link- 4</li>
//     </ul>
//   </div>
// </div>
// <div class="accordian">
//   <div class="accordian_title">About Us</div>
//   <div class="accordian_content">
//     <ul>
//       <li>Footer Link- 1</li>
//       <li>Footer Link- 2</li>
//       <li>Footer Link- 3</li>
//       <li>Footer Link- 4</li>
//     </ul>
//   </div>
// </div>
// Simple accordioan start here

/*Select Dropdown placeholder color change to jQuery*/
jQuery(document).on('change', '.request-franchise-form select[name="input_12"], .request-form-bottom select[name="input_12"]', function() {
    console.log(jQuery(this).val())
    if (jQuery(this).val()) {
        jQuery(this).css('color', '#000');
    } else {
        jQuery(this).css('color', '#757575');
    }
});


/**/
jQuery(document).ready(function($) {
  equalheight('.experice-section .experice-single');
});

jQuery(window).load(function() {
  equalheight('.experice-section .experice-single');
})
jQuery(window).resize(function() {
  equalheight('.experice-section .experice-single');
})
equalheight = function(container) {
  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el, topPosition = 0;
  jQuery(container).each(function() {
    $el = jQuery(this);
    jQuery($el).height('auto')
    topPostion = $el.position().top;
    if(currentRowStart != topPostion) {
      for(currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0;
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for(currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
}


/**/
jQuery(".strategy-box").click(function(){ 
  jQuery(".strategy-box").removeClass("arrow");
  jQuery(this).addClass("arrow");
  jQuery(".strategy-focus-detail").removeClass("active");
  jQuery(this).next(".strategy-focus-detail").addClass("active");
  jQuery('.strategy-focus-single').css({"margin-bottom" : "0"});
  jQuery(this).parent(".strategy-focus-single").css("margin-bottom", jQuery(".strategy-focus-detail").height());
  
  jQuery(this).next(".strategy-focus-detail").css("top", jQuery(".strategy-box").height());
});


/*Remove class after click outside the div*/
$(function() {
  $("#taskList").on("click", function(a) {
    $("#customSelect").addClass("on");
    a.stopPropagation()
  });
  $(document).on("click", function(a) {
    if ($(a.target).is("#customSelect") === false) {
      $("#customSelect").removeClass("on");
    }
  });
});