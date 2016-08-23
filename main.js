$('.loading').css('display','inline-block')
$('nav').data('offset-top',$(window).height())
$('html,body').css('overflow-y','hidden')
$(window).width()<768&&($('.scrollme').removeClass('scrollme'),$('.animateme').removeClass('animateme'))
$(window).load(function(){
  scrollme.init()
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#fefefe"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 11
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#fefefe",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })
  $('.circle').delay(500).animate({
    height:'2000px',
    width:'2000px',
    opacity:1
  },1000).promise().done(function(){
    scrollTo(0,0)
    $('.loading').fadeOut(1000).promise().done(function(){
      $('html,body').css('overflow-y','auto')
    })
  })
  $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
      $('.navbar-toggle').click()
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
      $('#a').text(x).slideDown(100).addClass(x.match(/email/i)?'alert-danger':'alert-success').removeClass(x.match(/email/i)?'alert-success':'alert-danger').promise().done(function(){
        $('#a').hasClass('alert-success')&&$('#u,#s').attr('disabled','true')
				$('#a').delay(4000).slideUp(200)
      })
    })
  })
  $('.member').mouseenter(function(){
    $(this).find('.social').fadeTo(100,1)
  })
  $('.member').mouseleave(function(){
    $(this).find('.social').fadeTo(100,.01)
  })
})
