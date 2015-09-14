'use strict';

 $(document).ready(start);

function start(){

var submitBtn = $('#submitbtn');

submitBtn.on('click', function() {
	$(this).prop('disabled',true);
	submitBtn.html('LOADING...');

	setTimeout(function() {
		$(this).prop('disabled', false);
		submitBtn.html('DOWNLOAD')
	}, 4000);
});

}