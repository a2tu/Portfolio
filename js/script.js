var switchPortfolioToActive = function(){
	// remove 'active' from Home button
	var classes = document.querySelector("#menuHome").className;
	classes = classes.replace(new RegExp("active", "g"), "");
	document.querySelector("#menuHome").className = classes;

	// add 'active' class to Menu button
	classes = document.querySelector("#menuPortfolio").className;
	if (classes.indexOf("active") == -1){
		classes += " active";
		document.querySelector("#menuPortfolio").className = classes;
	}
};


var switchGalleryToActive = function(){
	// remove 'active' from Home button
	var classes = document.querySelector("#menuHome").className;
	classes = classes.replace(new RegExp("active", "g"), "");
	document.querySelector("#menuHome").className = classes;

	// add 'active' class to Menu button
	classes = document.querySelector("#menuGallery").className;
	if (classes.indexOf("active") == -1){
		classes += " active";
		document.querySelector("#menuGallery").className = classes;
	}
};
