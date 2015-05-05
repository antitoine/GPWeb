$(document).ready(function()
{
	status('Choose a file :');

	//Check to see when a user has selected a file
	var timerId;
	timerId = setInterval(function()
	{
		if($('#userPhotoInput').val() !=='')
		{
			clearInterval(timerId);

			$('#uploadForm').submit();
		}
	},500);

	$('#uploadForm').submit(function()
	{
		status('uploading the file ...');
		$(this).ajaxSubmit({
			error: function(error)
			{
				status('Error: ' + error.status);
			},
			success: function(reponse)
			{
				if(response.error)
				{
					status("We have an error");
					return;
				}

				var imageUrlOnServer = response.path;

				status('Success, file uploaded to: '+ imageUrlOnServer);
				$('<img/>').attr('src',imageUrlOnServer).appendTo($('body'));
			}
		});
		return false;
	});
	function status(message)
	{
		$('#status').text(message);
	}
});