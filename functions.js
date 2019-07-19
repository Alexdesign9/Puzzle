function draggable(object){
	let cursorX
	let cursorY
	let key = false
	let translateX0
	let translateY0
object.onselectstart = function(){
	return false
}

	object.addEventListener('mousedown', function(){

		document.addEventListener('mousemove', getCoords)

		let translate = object.style.transform
		translateX0 = +translate.substring(10, translate.indexOf("px"))
		translateY0 = +translate.substring((translate.indexOf(" ") + 1), translate.indexOf("px", translate.indexOf(",")))
		key = true

		let cursorX0 = event.pageX
		let cursorY0 = event.pageY
		cursorX = event.pageX
		cursorY = event.pageY

		requestAnimationFrame(function animate(){
			if (key){
				let translateX = cursorX - cursorX0
				let translateY = cursorY - cursorY0
				object.style.transform = "translate(" + (translateX + translateX0) + "px, " + (translateY + translateY0) + "px)"
			}
			requestAnimationFrame(animate)
		})
	})

	document.addEventListener('mouseup',  function(){
		key = false
		document.removeEventListener('mousemove', getCoords)
	})

	function getCoords(){
		cursorX = event.pageX
		cursorY = event.pageY
	}
}


function connect(object1, object2, width, height,  type){
	object1.addEventListener('mouseup', function(){
		let translate1 = getTranslate(object1)
		let translate2 = getTranslate(object2)
		if(type == "horizontal"){
			if((translate2[0] - (width - 10)) > translate1[0] && (translate2[0] - (width + 10)) < translate1[0] && (translate2[1] - 10) < translate1[1] && (translate2[1]+ 10) > translate1[1]){
					
					object1.style.transform = "translate(" + (translate2[0] - width) + "px, " + translate2[1] + "px)"
			}
		}

		if(type == "vertical"){
			if((translate2[0] - 10) < translate1[0] && (translate2[0] + 10) > translate1[0] && (translate2[1] - (height + 10)) < translate1[1] && (translate2[1] - (height - 10)) > translate1[1]){

					object1.style.transform = "translate(" + translate2[0] + "px, " + (translate2[1] - height) + "px)"
			}
		}
	})

	object2.addEventListener('mouseup', function(){
		let translate1 = getTranslate(object1)
		let translate2 = getTranslate(object2)
		if(type == "horizontal"){
			if((translate1[0] + (width - 10)) < translate2[0] && (translate1[0] + (width + 10)) > translate2[0] && (translate1[1] - 10) < translate2[1] && (translate1[1]+ 10) > translate2[1]){
					
					object2.style.transform = "translate(" + (translate1[0] + width) + "px, " + translate1[1] + "px)"
				}
		}

		if(type == "vertical"){
			if((translate1[0] - 10) < translate2[0] && (translate1[0] + 10) > translate2[0] && (translate1[1] + (height + 10)) > translate2[1] && (translate1[1] + (height - 10)) < translate2[1]){

					object2.style.transform = "translate(" + translate1[0] + "px, " + (translate1[1] + height) + "px)"
			}
		}
	})
}
function getTranslate(object){
	let translate = object.style.transform
	let X = +translate.substring(10, translate.indexOf("px"))
	let Y = +translate.substring((translate.indexOf(" ") + 1), translate.indexOf("px", translate.indexOf(",")))
	return [X, Y]
}