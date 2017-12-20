var leftButton = document.querySelector(".left");
var rightButton = document.querySelector(".right");
var items = document.querySelectorAll(".item");

 
var left = 0;
for(var i = 0; i< items.length;i++){
	$(items[i]).css({left:left+"px", top:"0px"})
	left+=$(items[i]).width()
}

left = $(items[0]).width();
var index = -1;
var minusLeft = left*(items.length-1);
var check = true;


$(rightButton).click(function(){
	if(check == true){
		for(var a = 0; a < items.length; a++){
		$(items[a]).animate({left:"-="+left+"px"},500, function(){	
			$($(items)[index]).css("left", minusLeft+"px");
			check = true;
		})	
		}
		if(index == (items.length-1)){
			index= -1;
		}
		index++;
	}
	check = false;
})





var rightPos = 0;
var plusLeft = -left*(items.length-1);
$(leftButton).click(function(){
	if(index == -1){
		for(var i = 0; i< items.length;i++){
			items[i].style.left = rightPos+"px";
			items[i].style.top = "0px";
			rightPos+= -items[0].clientWidth;
			console.log(rightPos);
		}
	}
	if(check == true){
		for(var a = 0; a < items.length; a++){
		$(items[a]).animate({left:"+="+left+"px"},500, function(){			
			$($(items)[index]).css("left", plusLeft+"px");
			check = true;
		})	
		}
		if(index == (items.length-1)){
			index= -1;
		}
		index++;
	}
	check = false;	
})