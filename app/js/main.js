
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
element.mouseout(function (e) {
  e.preventDefault;
  console.dir(e.target);
  var el = $(e.target).is('svg') ? $(e.target) : $(e.target).parent('svg');
  console.dir(el[0]);

  // -> removing the class
  el.removeClass("run-animation");
//  
//  // -> triggering reflow /* The actual magic */
//  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
//  element.offsetWidth = element.offsetWidth;

  // -> and re-adding the class
  setTimeout(function () {$(el).addClass("run-animation")}, 100);

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