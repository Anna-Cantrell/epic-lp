var clicks=0,ctaButton=document.getElementById("#cta"),toggle=document.getElementById("toggle");$("#cta").click(function(){$("#form-holder").addClass("form-open"),$("#form-holder").addClass("form-open"),$("#menuCircle").addClass("toggle-circle-active"),$("#line1").addClass("toggle-line1-active"),$("#line2").addClass("toggle-line2-active"),$("#line3").addClass("toggle-line3-active"),clicks=1}),$("#toggle").click(function(){clicks++,clicks%2!=0?($("#form-holder").addClass("form-open"),$("#menuCircle").addClass("toggle-circle-active"),$("#line1").addClass("toggle-line1-active"),$("#line2").addClass("toggle-line2-active"),$("#line3").addClass("toggle-line3-active")):($("#form-holder").removeClass("form-open"),$("#menuCircle").removeClass("toggle-circle-active"),$("#line1").removeClass("toggle-line1-active"),$("#line2").removeClass("toggle-line2-active"),$("#line3").removeClass("toggle-line3-active"))});