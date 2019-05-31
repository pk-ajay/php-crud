

	$(function(){
    $(document).on('click','.aaa',function(){
        var del_id= $(this).attr('id');
        //alert(del_id);return false;
        
        $.ajax({
            type:'POST',
            url:'delete.php',
            data:{'del_id':del_id},
            success: function(data){
            	//alert(data);return false;
                 if(data=="YES"){
                    $(this).parents('tr').remove();
                 }else{
                        alert("can't delete the row")
                 }
             }

            });
        });
});
