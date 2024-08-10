$(document).ready(function(){

  //click show hide
  $('#text').click(function(){
    $(this).hide()
  }) 
  
  $('.show').click(function(){
    $('#text').show()
  })

  //toggle
  $('#btn_action').click(function(){
    $('.paragraph').toggle()

    if($('#btn_action').text() == "HIDE"){
        $(this).text("SHOW")
    }else{
        $(this).text("HIDE")
    }
  })

  //blur & change
  $('.alert').hide()
  $('#name').blur(function(){
    $('.alertName').show()
  })

  $('#email').change(function(){
    $('.alertEmail').show()
  })

  
  //animate
  $('.moveRight').click(function(){
    $('.box').animate({
        marginLeft: '300px'
    })
  })

  $('.moveLeft').click(function(){
    $('.box').animate({
        marginLeft: '0px'
    })
  })




})