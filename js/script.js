
function disableLightbox(){
	document.getElementsByTagName("figure")[0].getElementsByTagName("A")[0].removeAttribute("data-lightbox");
}

function disableImage(){
	document.getElementsByTagName("figure")[0].getElementsByTagName("A")[0].removeAttribute("href");
}

var windowWidth = $(window).width();
if (windowWidth < 767){
	disableLightbox();
}

// if ( $(window).width() < 767){
// 	disableLightbox();
// 	disableImage();
// }
