<script>
$(document).ready(function(){
    
       $.getJSON("https://forum.amarantos.org/directory_items.json?order=likes_received&period=monthly", function(data, status){
           
      myObj=data;
      var base_url = window.location.origin;
      z0 = base_url+myObj.directory_items[0].user.avatar_template.replace("{size}", "24");
      z1 = base_url+myObj.directory_items[1].user.avatar_template.replace("{size}", "24");
      z2 = base_url+myObj.directory_items[2].user.avatar_template.replace("{size}", "24");
      z3 = base_url+myObj.directory_items[3].user.avatar_template.replace("{size}", "24");
      z4 = base_url+myObj.directory_items[4].user.avatar_template.replace("{size}", "24");
      z5 = base_url+myObj.directory_items[5].user.avatar_template.replace("{size}", "24");
     $(".dropdown-content123").append('<img class="learder_rounded" src="'+z0+'"><b>'+myObj.directory_items[0].user.username+"</b><br>");
     $(".dropdown-content123").append('<img class="learder_rounded" src="'+z1+'"><b>'+myObj.directory_items[1].user.username+"</b><br>");
     $(".dropdown-content123").append('<img class="learder_rounded" src="'+z2+'"><b>'+myObj.directory_items[2].user.username+"</b><br>");
     $(".dropdown-content123").append('<img class="learder_rounded" src="'+z3+'"><b>'+myObj.directory_items[3].user.username+"</b><br>");
     $(".dropdown-content123").append('<img class="learder_rounded" src="'+z4+'"><b>'+myObj.directory_items[4].user.username+"</b><br>");
     $(".dropdown-content123").append('<img class="learder_rounded" src="'+z5+'"><b>'+myObj.directory_items[5].user.username+"</b><br>");
});
});
</script>
