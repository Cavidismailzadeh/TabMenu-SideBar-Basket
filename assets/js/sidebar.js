



$(document).ready(function(){

    $("i").click(function(e){  
     if($(".sidebar").hasClass("hide-sidebar")){
        $(".sidebar").removeClass("hide-sidebar");
     }else{
         $(".sidebar").addClass("hide-sidebar")
     }
      e.preventDefault();
     if($(".up-icon").hasClass("d-none")){
        $(".up-icon").removeClass("d-none");
        $(".down-icon").addClass("d-none");  
     }else{
        $(".down-icon").removeClass("d-none");
        $(".up-icon").addClass("d-none");  
     }
    })
})



