$(document).ready(function () {

	var boxWrapper = $(".box-wrapper");

  boxWrapper.on('mouseleave', function(event) {
  	$(this).addClass('leave');

  	setTimeout(function(){
		  boxWrapper.removeClass('leave');
		}, 200); 
  });
});