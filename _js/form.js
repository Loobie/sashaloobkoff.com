$(function() {
  $('.error').hide();
  $('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){
    $(this).css({backgroundColor:"#ffffff"});
  });
  $('input.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });

  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error').hide();
		
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
		var email = $("input#email").val();
		if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
		var email_msg = $("textarea#email_message").val();
		
		
		var dataString = 'name='+ name + '&email=' + email + '&email_msg=' + email_msg;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h2>Contact Form Submitted!</h2>")
        .append("<p>We will be in touch soon.</p>")
        .append("<img id='checkmark' src='_images/check.png' />")
        .hide()
        .fadeIn(1500, function() {
          //$('#message').append("<img id='checkmark' src='_images/check.png' />");
        });
      }
     });
    return false;
	});
});
runOnLoad(function(){
  $("input#name").select().focus();
});
