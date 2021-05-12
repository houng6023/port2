$('.nav > .fas').on('click',function(){
    $('.right').addClass('on')
    
})

$('section .fa-times-circle').on('click',function(){
    $('.right').removeClass('on')
    
})




$('.right ul li').on('click',function(){
   var num =  $(this).index()

    
 $('#Bigbox > div').eq(num).toggleClass('on').siblings().removeClass('on')
})



// 네모 엑스버튼 클릭시 
$('#Bigbox .close').on('click',function(){
    $(this).parent().removeClass('on')
 })





