$(document).ready(function() {
		      
		  });

function command(cgiName){
    $.ajax({
	       url: cgiName,
	       cache: false,
	       success: function(html){
		   $('#output-box').html(html);
	       }
	   });
}


function dinam(cgi, label){
    setInterval(cgiRequest, 1500, cgi, label);
      }

function stop(){
    clearInterval();
}