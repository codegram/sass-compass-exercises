$(window).load(function(){
  var masonry = function(){
    if($(window).width() > 480){
      $('#shurikens').masonry({
        isFitWidth: true,
        isResizable: true
      });
    }
  }
  // masonry();
  // $(window).resize(masonry);
});
