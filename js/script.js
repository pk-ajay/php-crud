$(document).ready(function(){
var id = 1;

	$(".event").click(function(e){
		e.preventDefault();
  	var name = $("#name").val();  
  	var lastname = $("#last").val();  	
  	var user = $("#user").val();
  		 id++;
  	//alert(id);return false;
  	$('#append').append('<tr>\
  		<td>'+id+'</td>\
            <td>'+name+'</td>\
            <td>'+lastname+'</td>\
            <td>'+user+'</td>\
            <td><a href=""  class="btn btn-danger">Delete</a>\
          </tr>');

  	var name = $("#name").val('');  
  	var lastname = $("#last").val('');  	
  	var user = $("#user").val('');
  	
  });
         
	/////////////////////
});