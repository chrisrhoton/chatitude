var Slider = (function ($) {

    var configMap = {
        extendedHeight  : 40,
        extendedWidth   : 250,
        extendedTitle   : 'Click to retract',
        retractedHeight : 15,
        retractedWidth  : 30,
        retractedTitle  : 'Click to extend',
        templateHtml    : '<div class="user"><span id="ident"><\/span><\/div>'
      },
      $slider,
      $user,
      toggleSlider, onClickSlider, initModule;


    toggleSlider = function() {
      var sliderHeight = $slider.height();

      if( sliderHeight === configMap.retractedHeight ) {
        $slider
          .animate({height : configMap.extendedHeight, width: configMap.extendedWidth })
          .attr( 'title', configMap.extendedTitle);
        $user.fadeIn();
          return true;
      }
      else if (sliderHeight === configMap.extendedHeight ) {
        $slider
          .animate({ height : configMap.retractedHeight, width: configMap.retractedWidth })
          .attr( 'title', configMap.retractedTitle );
        $user.fadeOut();
          return true;
      }
      return false;
    };

    onClickSlider = function(event) {
      toggleSlider();
      return false;
    };

    initModule = function( $container, username ) {
      $container.html( configMap.templateHtml );

      $slider = $container.find('.user');

      $slider
        .attr('title', configMap.extendedTitle)
        .click(onClickSlider);

      $user = $slider.find('#ident');
      $user.text(username);

      return true;

    };

    return { 
      initModule : initModule 
    };
  }(jQuery));