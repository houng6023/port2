$('.nav > .fas').on('click',function(){
    $('.right').addClass('on')
    
})

$('section .far').on('click',function(){
    $('.right').removeClass('on')
    
})



$('.right ul li').on('click',function(){
   var num =  $(this).index()

    
 $('#Bigbox > div').eq(num).toggleClass('on').siblings().removeClass('on')
})







