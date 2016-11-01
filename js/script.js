
		var allPlaces = [];
		var place1 = '#place1';
		var place2 = '#place2';
		var place3 = '#place3';
		var place4 = '#place4'; 

$(document).ready(function() {    

// start code

	// clearLockalStorage();
	
	setBananas();
	console.log("length first - "+ localStorage.length);

	// showBananas();

	var letterArray = document.querySelectorAll("#alfavit > div");

	for (var i = 0; i < letterArray.length ; i++) {
		$(letterArray[i]).attr('href', 'alfavit_task_page.html?'+ i);
	}


	$('#alfavit > div').click(function(){

    	window.location.href = $(this).attr("href");
		
	});

	


	var a_pictures = [];
	for (var i = 0; i < 33; i++) {

		a_pictures[i] = '<img src="i/'+ i +'.jpg">';
	}


	function vstavka_pictures() {
    
		getArrayOrder();
		// console.log(allPlaces);

		for (var k = 1; k < 4  ; k++ ){

			var w = Math.floor(Math.random() * (33 - 1));

			if(w === getIndexNum()){
				w = w + 1;
			}
			
			$(allPlaces[k]).append(a_pictures[w]);
			// $(allPlaces[K]).attr("name","false");
			

		// if (search == k  ){
		// 	places[i].append(picture_arrey[i]);
		// }
			
		}

		$(allPlaces[0]).append('<img src="i/' + getIndexNum() + '.jpg">');
		$(allPlaces[0]).attr("value","true");
		// console.log('<img src="i/' + getIndexNum() + '.jpg">');
	}

    vstavka_pictures();

    setBukva();


	// Sounds after clicked on any variant in task
    // var countClicks = 0;
    // localStorage.setItem('countClicks', 0);

	$('#zad div').click(function(){

		// var getClickedImageIndex = $(this).attr("href");
		console.log(this.hasAttribute("value"));//отладка


		if (this.hasAttribute("value")) {

			var audio = $("#right")[0];
			audio.play();

			var localStoragePlusOne = localStorage.length + 1;

			// countClicks++;

			localStorage.setItem('rightAnswers ' + localStoragePlusOne, localStoragePlusOne);
                 console.log("length "+ localStorage.length);
			

			addRightAnswerBanana();


			var href2 = "alfavit.htm";
			// window.location.href = $(this).attr(href2);

			// console.log(localStorage.getItem('countClicks',));


		}else{

			var audio = $("#wrong")[0];
			audio.play();

			   // console.log(55555);
		}
		
		if(localStorage.length >= 10){
			goToCartoonsPage();
			clearLockalStorage();
		}

	});



// end code    
});


function goToCartoonsPage(){

	window.location = "cartoon_page.htm";
}


function setBananas(){

	var storlen = localStorage.length;

	for (var i = 0; i < 10; i++) {

		$('.info').append('<img src="i/banan.jpg">').animate({opacity: 1});

	}

	for (var i = 1; i < 11; i++) {

		// console.log("i = " + i);

		var $banana = $('.info img:nth-of-type('+ i + ')');
		// console.log('.info img:nth-of-type('+ i + ')');

		if (i <= storlen) {

			// var $banana = $('info img:nth-of-type('+ i + ')');
			$banana.append('<img src="i/banan.jpg">');
			$banana.animate({opacity: 1});

		}
		else{

			var $banana = $('img:nth-of-type('+ i + ')');
			$banana.animate({opacity: 0.4});
		}
		
	}

	// for (var i = 0; i < 10; i++) {

	// 	$('.info').append('<img src="i/banan.jpg">');
	// }
}


function setBukva(){

	$('#bukva div').append('<img src="i/letters/' + getIndexNum() + '.jpg">');
}

function getIndexNum(){
	var num = parseInt(window.location.search.replace(/\D+/g,""));
    // console.log(num);
    return num;
}


function randomNumber(){

	return Math.floor(Math.random()*10);
}


function getArrayOrder(){

	var q = randomNumber();

	if(0 < q && q < 2){

		allPlaces = [place4, place3, place2, place1];

	}else if (2 <= q && q < 4) {

		allPlaces = [place1, place2, place3, place4];

	}else if (4 <= q && q< 6) {

		allPlaces = [place2, place1, place3, place4];
		
	}else if (6 <= q && q < 8) {

		allPlaces = [place3, place2, place4, place2];
		
	}else{
		 allPlaces = [place3, place1, place4, place2];
		
	};
	
}



function clearLockalStorage(){

	localStorage.clear();

}

function addRightAnswerBanana(){

	var storlen = localStorage.length;

		var $banana = $('.info img:nth-of-type('+ storlen + ')');

			$banana.animate({opacity: 1});

	}
