$('#save').click(function()
{
	var log = $('input[name = login]').val();
	console.log(log);
	var pass = $('input[name = password]').val();
	console.log(pass);

 $.ajax({
    method: "POST",
    url: "/",
    data: { login: log, mdp: pass }
  }).done(function()
  {
  	console.log("parfait");
  }).fail(function()
  {
  	console.log("échec");
  }).always(function()
  {
  	console.log("complété");
  });

});	

