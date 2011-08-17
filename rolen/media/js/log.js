define(["jquery", "firmin-1.0.0-min"], function($, Firmin) {

  var currentIndex = 0;

  function scrollToCurrent() {
    var currentLi = $("#log li").eq(currentIndex);
    $("#log").animate({
      top: -1 * currentLi.position().top
    });
  }

  function init() {
    $("#log li").click(function (e) {
      currentIndex = $("#log li").index($(this));
      scrollToCurrent();
    });
  }

  return {
    init: init
  };
});