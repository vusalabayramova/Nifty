$(document).ready(function(){
$(window).scroll(function(){
if($(window).scrollTop()>100){
$("#phone-header").addClass("active");
}
else{
    $("#phone-header").removeClass("active");    
}    
})

$(".open").click(function(){
$("#side-bar").addClass("active-menu");    
})
$(".exit").click(function(){
$("#side-bar").removeClass("active-menu");    
})

})

