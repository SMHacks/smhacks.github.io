$('.loading').css('display','inline-block')
$('.bg').css('display','none')
$('nav').data('offset-top',$(window).height())
$('html,body').css('overflow-y','hidden')
$(window).width()<768&&($('.scrollme').removeClass('scrollme'),$('.animateme').removeClass('animateme'))
$(window).load(function(){
	$('.circle').delay(500).animate({
		height:'2000px',
		width:'2000px',
		opacity:1,
		backgroundColor:'#ccc'
	},1000).promise().done(function(){
		scrollTo(0,0)
		$('.loading').fadeOut(1000).promise().done(function(){
      $('.bg').fadeIn(1000).promise().done(function(){
        $('html,body').css('overflow-y','auto')
      })
		})
	})
  $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
      target=$(this.hash)
      target=target.length?target:$('[name='+this.hash.slice(1)+']')
      if(target.length){
        $('html,body').animate({
          scrollTop:target.offset().top-70
        },1000)
        return false
      }
    }
  })
  $('#s').click(function(){
    $.post('https://smhacks-molarmanful.rhcloud.com/',{email:$('#u').val()},function(x){
      $('#a').text(x).slideDown(100).addClass(x.match(/email/i)?'alert-danger':'alert-success').removeClass(x.match(/email/i)?'alert-success':'alert-danger').delay(4000).slideUp(200,function(){
        $('#a').hasClass('alert-success')&&$('#update').slideUp(200)
      })
    })
  })
})