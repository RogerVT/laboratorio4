$(document).ready(function () {
	var listo_btn = '<button id = "listo_btn" class="uk-button uk-button-primary uk-button-small">Done</button>';
	var elim_btn = '<button id = "elim_btn" class="uk-button uk-button-danger uk-button-small">Del</button>';
	var uncheck_btn = '<button id = "uncheck_btn" class="uk-button uk-button-primary uk-button-small">Undo</button>';

	$("#item").submit(function( event ) {
    	var text = $("#entry").val();
    	$('#todo-list').append("<li>"+text+elim_btn+listo_btn+"</li>");
    	event.preventDefault();
  	});

	$('#todo-list').on('click', '#elim_btn', function(){
    	$(this).parent().remove();
  	});

  	$('#todo-list').on('click', '#listo_btn', function(){
    	var raw = $(this).parent().text();
    	var item = raw.slice(0,-7)
    	$(this).parent().remove();
    	$('#complete-list').append("<li>"+'<p class = "terminado">'+item+'</p>'+elim_btn+uncheck_btn+"</li>");
  	});

  	$('#complete-list').on('click', '#uncheck_btn', function(){
    	var raw = $(this).parent().text();
    	var item = raw.slice(0,-7)
    	$(this).parent().remove();
    	$('#todo-list').append("<li>"+'<p>'+item+'</p>'+elim_btn+listo_btn+"</li>");
  	});

  	$('#complete-list').on('click', '#elim_btn', function(){
    	$(this).parent().remove();
  	});




});