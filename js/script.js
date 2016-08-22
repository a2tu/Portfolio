
// function disableLightbox(){
// 	document.getElementsByTagName("figure")[0].getElementsByTagName("A")[0].removeAttribute("data-lightbox");
// }

// function disableImage(){
// 	document.getElementsByTagName("figure")[0].getElementsByTagName("A")[0].removeAttribute("href");
// }

// var windowWidth = $(window).width();
// if (windowWidth < 767){
// 	disableLightbox();
// }

// if ( $(window).width() < 767){
// 	disableLightbox();
// 	disableImage();
// }




Lightbox.prototype.enable = function() {
    var self = this;

    if $(window).width(>768){
	    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
	      self.start($(event.currentTarget));
	      return false;
	    });
	}
	else{
		return;
	}
  };