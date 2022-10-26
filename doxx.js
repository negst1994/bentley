var o;
var timer;
var activeF = true;
var activeF1 = true;
var activeF2 = true;
var secod;
var secod1;
let vkladka;
let i = 0;
let array = [];
let buttenId = 1;
let shet1;
let shet2;


window.onload = function buttonSearch(){
	if (document.getElementsByClassName('md ion-page hydrated')[0] == undefined){
		setTimeout(buttonSearch, 1000);
	}else{
		document.getElementsByClassName('md ion-page hydrated')[0].insertAdjacentHTML('beforebegin', '<div id="osnova" style="display: flex; z-index: 99999;    position: absolute; background: #999; height: 200px;"><div id="closeScript" onclick="closeScript" style="cursor: pointer;right: 8px;position: absolute;width: 16px;height: 16px;text-align: center;">x</div><div style="padding: 10%;height: 19px;position: relative;display: grid;font-size: 12px;width: 300px;"><span id="secundT">Сколько принимается ставка?</span><input id="vkladka" style="border: 1px solid;" value="1"><span>Какая по счету вкладка?</span><input id="vkladka1" style="border: 1px solid; margin-bottom: 10px;" value="1"><button onclick="buttonAddClick();" style="border: 1px solid black;margin: 2px 20px; ">Добавить кнопку</button><button id="startCikl" onclick="startCikl();" style="border: 1px solid black;margin: 2px 20px;">Запустить цикл</button><span id="timeSec"></span></div></div>');
		buttonAddClick();
	};
}

function closeScript(){
	
}

function buttonAddClick(){
	if (buttenId < 4){
		document.getElementById('vkladka1').insertAdjacentHTML('afterend', '<button id="searchElement'+buttenId.toString()+'" onclick="searchElement'+buttenId.toString()+'();" style="border: 1px solid black;margin: 2px 20px;">Куда жать ' + buttenId.toString() + '</button>');
		buttenId++;
	}else{
		alert("Жирно не будет");
	}

	
}



// Цикл получения кнопки 1
// Запуск и проверка на повторные нажатия;
function searchElement1(){
	if (activeF){
		console.log('Мы запустились');
		document.getElementById('searchElement1').style.background = "red";
		activeF = false;
		setTimeout(a1, 500);
	}else{
		console.log('Элемент еще не выбран');
	}
};
// Получение элемента
function a1(){
	$("*").on("click", function(e) {
		console.log(e.target);
		o1 = e.target; 
		$("*").off("click");
		console.log('все чикипуки');
		if (o1 != ""){
			activeF = true;
			document.getElementById('searchElement1').style.background = "green";
		}
	    return false;
	});
};

// Цикл получения кнопки 2
// Запуск и проверка на повторные нажатия;
function searchElement2(){
	if (activeF){
		console.log('Мы запустились');
		document.getElementById('searchElement2').style.background = "red";
		activeF = false;
		setTimeout(a2, 500);
	}else{
		console.log('Элемент еще не выбран');
	}
};
// Получение элемента
function a2(){
	$("*").on("click", function(e) {
		console.log(e.target);
		o2 = e.target; 
		$("*").off("click");
		if (o2 != ""){
			activeF = true;
			document.getElementById('searchElement2').style.background = "green";
		}
	    return false;
	});
};

// Цикл получения кнопки 3
// Запуск и проверка на повторные нажатия;
function searchElement3(){
	if (activeF){
		console.log('Мы запустились');
		document.getElementById('searchElement3').style.background = "red";
		activeF = false;
		setTimeout(a3, 500);
	}else{
		console.log('Элемент еще не выбран');
	}
};
// Получение элемента
function a3(){
	$("*").on("click", function(e) {
		console.log(e.target);
		o3 = e.target; 
		$("*").off("click");
		if (o3 != ""){
			activeF = true;
			document.getElementById('searchElement3').style.background = "green";
		}
	    return false;
	});
};






// Получение массива (В какие секунды можем запускать цикл)
function startCikl(){
	if ((document.getElementById('vkladka').value == "") || (document.getElementById('vkladka1').value == "")){
		alert('Заполни поля!!!');
	}else{
		secod1 = document.getElementById('vkladka').value;
		vkladka = document.getElementById('vkladka1').value;
	    document.getElementById('startCikl').style.background = "red";
	    document.getElementById('startCikl').textContent = "Синхронизируюсь!";
		while(vkladka < 60){
		    array.push(vkladka);
		    vkladka = (Number(vkladka) + Number(secod1)).toString();
		};
		polSec();
	}

}
// Перебор массива с реальным временем и старта кликабельности
function polSec(){
	var date = new Date();
    while(i != array.length){
       
	       if (array[i] == date.getSeconds()){
	            console.log(date.getSeconds() + 'Стартанул');
	            document.getElementById('startCikl').style.background = "green";
	            document.getElementById('startCikl').textContent = "Стартанул";
	            secod = document.getElementById('vkladka').value + '000';
	            
				setInterval(ha, secod);
    			return false;
	        }else{
	            console.log(date.getSeconds());
	        };
       i++;
    };
    setTimeout(polSec, 1000);
    i = 0;
};

// Прокликиваем по интервалу
function ha(){
	switch (buttenId){
		case 2:
			o1.click();
			break;
		case 3:	
			o1.click();
			setTimeout(function(){o2.click()}, 500);
			break;
		case 4:
			o1.click();
			setTimeout(function(){o2.click()}, 500);
			setTimeout(function(){o3.click()}, 500);
			break;
	};

};



function okButton(){
	if (document.getElementsByClassName('sc-ion-modal-md-h sc-ion-modal-md-s md loading-modal hydrated show-modal')[0] !== undefined){
        document.getElementsByClassName('sc-ion-modal-md-h sc-ion-modal-md-s md loading-modal hydrated show-modal')[0].remove();
	    if (document.getElementsByClassName('alert-button ion-focusable ion-activatable sc-ion-alert-ios')[0] !== undefined){
	        document.getElementsByClassName('alert-button ion-focusable ion-activatable sc-ion-alert-ios')[0].click();
        }
        setTimeout(okButton, 100);
    }else{
        setTimeout(okButton, 100);
    }
        
}
okButton();











// //Получение счета 1 команды
// function shetOneCommand(){
// 	if (activeF1){
// 		activeF1 = false;
// 		searchShet1();
// 		console.log('Выберите элемент');
// 	}else{
// 		console.log('Элемент еще не выбран');
// 	}
// };

// function searchShet1(){
// 	console.log('Мы запустились');
// 	$("*").on("click", function gg1() {
// 		console.log("Поиск элемента");
// 		//Функция для получание кнопки на которую нужно будет давить!
// 		$("*").off("click", gg1);
// 		setTimeout(shet11, 500);
// 	}); 
// };

// function shet11(){
// 	$("*").on("click", function(e) {
// 		shet1 = e.target;
// 		console.log(shet1.textContent);
// 		$("*").off("click");
// 		activeF1 = false;
// 		document.getElementById('shetOneCommand').style.display = "none";
// 		document.getElementById('shetTwoCommand').style.display = "";
// 	    return false;
// 	});
// };



// //Получение счета 2 команды
// function shetTwoCommand(){
// 	if (activeF2){
// 		activeF2 = false;
// 		searchShet2();
// 		console.log('Выберите элемент');
// 	}else{
// 		console.log('Элемент еще не выбран');
// 	}
// };

// function searchShet2(){
// 	console.log('Мы запустились');
// 	$("*").on("click", function gg1() {
// 		console.log("Поиск элемента");
// 		//Функция для получание кнопки на которую нужно будет давить!
// 		$("*").off("click", gg1);
// 		setTimeout(shet12, 500);
// 	}); 
// };

// function shet12(){
// 	$("*").on("click", function(e) {
// 		shet2 = e.target;
// 		console.log(shet2.textContent);
// 		$("*").off("click");
// 		activeF2 = false;
// 	    return false;
// 	});
// };



