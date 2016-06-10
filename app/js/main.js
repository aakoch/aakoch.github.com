
      // First lets create our drawing surface out of existing SVG element
      // If you want to create new surface just provide dimensions
      // like s = Snap(800, 600);
      //var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
      //        fill: "none",
      //        stroke: "#bada55",
      //        strokeWidth: 5
      //    });
      //    p = p.pattern(0, 0, 10, 10);
      var element = $("svg").addClass("run-animation");
      element.hover(function () {
      //   var s = Snap("#svg");
      //    var triangle2 = s.select('path');//.transform('r40,200,200');
      //
      //    var bbox = triangle2.getBBox(); //bounding box, get coords and centre
      //    triangle2.animate({ transform: "r360," + bbox.cx + ',' + bbox.cy + "s1,1," + bbox.cx + "," + bbox.cy}, 200);
      },
      function (e) {
          e.preventDefault;

        // -> removing the class
        element.removeClass("run-animation");
      //  
      //  // -> triggering reflow /* The actual magic */
      //  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
      //  element.offsetWidth = element.offsetWidth;

        // -> and re-adding the class
        setTimeout(function () {element.addClass("run-animation")}, 10);

      });
      //$('.avatar').hover(function () {
      //  var that = $(this);
      //  setTimeout(function() {
      //    that.addClass('magictime puffOut');
      //    setTimeout(function() {
      //      that.removeClass('puffOut').addClass('puffIn');
      //    }, 1000);
      //  }, 1000);
      //});