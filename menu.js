/*Меню*/

var _menu = {
	0:'<a class="a1" href="index.html">главная</a>',
	1:'<a class="a1" href="01_introduction_and_description.html">введение и описание</a>',
	2:'<a href="02_catalog.html">каталог</a>',
	3:'<a href="03_ratings.html">рейтинги</a>',
	4:'<a href="04_training scenarios.html">сценарии обучения</a>',
	5:'<a href="05_feedback.html">обратная связь</a>',
	     };
//console.dir(_iden_page);


function createMenu($menu) {
	var $menu,
	    $ul = document.querySelector("ul"),
	    $li,
	    $number_el_menu = 0,
	    $iden_page = _iden_page;

	console.log($ul);

	//Подсчёт количества элементов меню
	for (var key in $menu) {
	$number_el_menu++;
	}

	for (var i=0; i < $number_el_menu; i++) {
		$li = document.createElement("li");
		
		//Для закрашивания соответствующего элемента меню
		if (i == $iden_page) {  	

			$li.setAttribute("class", "putA");
        	}

		$cell = $menu[i];
		$li.innerHTML = $cell;
		$ul.appendChild($li);
	}
}
createMenu(_menu);