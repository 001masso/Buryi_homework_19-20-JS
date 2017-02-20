jQuery(function() {

	jQuery('.single-item').slick();


	jQuery(".services__hover").hide();

	jQuery("#img_1").hover(
	 	function(){
			jQuery("#img_1_hover").show();
    	jQuery("#title_1_hover").css('color','#f4b60d')
	  },
	  function(){
	  	jQuery("#img_1_hover").hide();
	  	jQuery("#title_1_hover").css('color','#fff')
	});

	jQuery("#img_2").hover(
	 	function(){
			jQuery("#img_2_hover").show();
    	jQuery("#title_2_hover").css('color','#f4b60d')
	  },
	  function(){
	  	jQuery("#img_2_hover").hide();
	  	jQuery("#title_2_hover").css('color','#fff')
	});

	jQuery("#img_3").hover(
	 	function(){
			jQuery("#img_3_hover").show();
    	jQuery("#title_3_hover").css('color','#f4b60d')
	  },
	  function(){
	  	jQuery("#img_3_hover").hide();
	  	jQuery("#title_3_hover").css('color','#fff')
	});

	jQuery("#img_4").hover(
	 	function(){
			jQuery("#img_4_hover").show();
    	jQuery("#title_4_hover").css('color','#f4b60d')
	  },
	  function(){
	  	jQuery("#img_4_hover").hide();
	  	jQuery("#title_4_hover").css('color','#fff')
	});

});