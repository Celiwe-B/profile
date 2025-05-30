let gallery = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windoWidth = window.innerWidth;

if(gallery) {
	gallery.forEaCh(function(image, index) {
		image.onClick = function() {
			let getElementsCss = window.getComputedStyle(image);
			let getFullImgUrl = getElementsCss.getPropertyValue("background-image");
			let getImgUrlPos = getFullImgUrl.split("gallery/");
			let setNewImgUrl = getImgUrlPos[1].replace('")', '');
			
			getLatestOpenedImg = index + 1;
			
			let container = document.body;
			let newImgWindow = document.createElement("div");
			container.appendChild(newImgWindow);
			newImgWindow.setAttribute("class", "img-window");
			newImgWindow.setAttribute("onClick","closeImg()");
			
			let newImg = document.createElement ("img");
			newImgWindow.appendChild(newImg);
			newImg.setAttribute("src", "img/" + setNewImgUrl);
			newImg.setAttribute("id", "current-img");
			
			newImg.onload = function(){
			let imgWidth = this.width;
			let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
			
			
			let newNextBtn = document.createElement("a");
			let btnNextText = document.createTextNode("Next");
			newNextBtn.appendChild(btnNextText);
			container.appendChild(newNextBtn);
			newNextBtn.setAttribute("class", "img-btn-next");
			newNextBtn.setAttribute ("onClick", "changeImg()");
			newNextBtn.style.cssText = "right:" +calcImgToEdge+ " px; ";
			
			let newPrevBtn = document.createElement("a");
			let newPrevText = document.createTextNode("Prev");
			newPrevBtn.appendChild(btnPrevText);
			container.appendChild(newPrevBtn);
			newPrevBtn.setAttribute("class", "img-btn-prev");
			newPrevBtn.setAttribute ("onClick", "changeImg()");
			newPrevBtn.style.cssText = "right:" +calcImgToEdge+ " px; ";
		}
	});
}
function closeImg() {
	document.querySelector(".img-window").remove();
	document.querySelector(".img-btn-next").remove();
	document.querySelector(".img-btn-prev").remove();
}
function changeImg(changeDir) {
	document.querySelector("#current-img").remove()
	
	let getImgWindow = document.querySelector(".img-window");
	let newImg = document.createElement("img");
	getImgWindow.appendChild(newImg);
	
	let calcNewImg;
	if (changeDir ===1 ) {
		calcNewImg = getLatestOpenedImg + 1;
		if (calcNewImg > gallery.length) {
			calcNewImg = 1;
	    }
	}
	else if (changeDir ===0 ) {
		calcNewImg = getLatestOpenedImg - 1;
		if (calcNewImg < 1) {
			calcNewImg = galleryImages.length;
		}
	}
  newImg.setAttribute("src", "img/img" + calcNewImg."jpg");	
  newImg.setAttribute("id", "current-img");
  
  getLatestOpenedImg = calcNewImg;
  
  NewImg.onload = function () {
	  let imgWidth = this.width;
	  let calcImgToEdge = ((windowWidth - imgWiddth) / 2) - 80;
	  
	  let nextBtn = document.querySelector (".img-btn-next");
      nextBtn.style.cssText = "right: "+ calcImgToEdge + "px;"  

      let prevBtn = document.querySelector (".img-btn-next");
      prevBtn.style.cssText = "right: "+ calcImgToEdge + "px;"  	  
  }
  }
}
