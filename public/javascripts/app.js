//AUX FUNCTIONS
function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
}

//MAIN
$(window).load(function(){

  //ANIMATIONS
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false       // trigger animations on mobile devices (true is default)
    }
  );
  wow.init();

  //VIDEO
  $("#video").fitVids({ customSelector: "iframe[src^='http://vimeo.com/95340177'], iframe[src^='http://vimeo.com/95340177']"});

  //MILESTONE
  $('#infinity').data('countToOptions', {
    onComplete: function (value) {
      count.call(this, {
        from: value,
        to: value + 1
      });
    }
  });

  //TIMERS
  $('.timer').each(count);

  //SHARE BUTTONS
  $('.social-likes').socialLikes({
    url: 'http://aws-intro.com/',
    title: 'One day hands-on AWS Introduction course. The Cloud Awaits!',
    counters: false,
    singleTitle: 'Share it!'
  });

  //PARALLAX BACKGROUND
  $(window).stellar({
    horizontalScrolling: false,
  });

  //PRELOADER
  $('.preload').delay(250).fadeOut('slow');
  $('body').delay(250).css({'overflow-x':'hidden'});

  console.log('loaded app.js');

});
