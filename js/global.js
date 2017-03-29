$( document ).ready(function() {

  $(".typed").typed({
    strings: ["evjon", "evjohns.com"],
    typeSpeed: 75,
    startDelay: 1000,
    loop: false,
  });

  $( "#contact-form button" ).click( function(e) {
        e.preventDefault();
        var error = false;

        if ( !($("input#name").val().length > 0) ) {
            $( "p.err#name" ).text( "Please enter a name." );
            error = true;
        }

        if ( !($("input#email").val().length > 0) ) {
            $( "p.err#email" ).text( "Please enter an email address." );
            error = true;

        } else {
            var email = $("input#email").val();
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");

            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                $( "p.err#email" ).text( "Please enter a valid email address." );
                error = true
            }
        }

        if ( !( $("textarea#message").val().length > 0) ) {
            $( "p.err#message" ).text( "Please enter a message." );
            error = true;
        }

        if (error === true) {
            return false;
        }

        $.ajax( {
            type: "POST",
            url: "/ajax/contact-form.php",
            data: { "name": $( "input#name" ).val(), "email": $( "input#email" ).val(), "message": $( "textarea#message" ).val() },
            success: function(result) {
                $( "form#contact-form" ).trigger("reset");
            }
        } );
    } );

  $(document).ajaxStart(function() {
          $("#send-btn").html("Sending... <div class='loader'></div>");
  })
  $(document).ajaxStop(function() {
          $("#send-btn").html("Sent");
  })

});
