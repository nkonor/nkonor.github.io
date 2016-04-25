/*Меню*/

var _menu = {
	0:'<form action="Index.html"><input type="image" value="главная" style="cursor:pointer;"></form>',
	1:'<form action="01_introduction_and_description.html"><input type="image"value="введение и описание" style="cursor:pointer;"></form>',
	2:'<form action="02_catalog.html"><input type="image" value="каталог" style="cursor:pointer;"></form>',
	3:'<form action="03_ratings.html"><input type="image" value="рейтинги" style="cursor:pointer;"></form>',
	4:'<form action="04_training scenarios.html"><input type="image" value="сценарии обучения" style="cursor:pointer;"></form>',
	5:'<form action="05_feedback.html"><input type="image" value="обратная связь" style="cursor:pointer;"></form>',
	     };
//console.dir(_iden_page);

function createMenu($menu) {
	var $menu,
	    $nav = document.querySelector("nav"),
  	    $table, 
  	    $tr = document.createElement("tr"),
  	    $td,
  	    $cell,
   	    $number_el_menu = 0, //Переменная для определение количества элементов меню
	    $iden_page = _iden_page;  //Переменная для определения страницы расположения и закрашивания соответствующего элемента меню				    
	
	$table = document.createElement("table");
	$table.setAttribute("border", "0");
	$table.setAttribute("id", "menu");
	//$table.setAttribute("style", "cursor:pointer;");
	
	//$iden_page = document.querySelector("title");	
	//$iden_page = $iden_page.innerText;	

	//Подсчёт количества элементов меню
	for (var key in $menu) {
	$number_el_menu++;
	}	
	
	for (var i=0; i < $number_el_menu; i++) {
		$td = document.createElement("td");
		$td.setAttribute("style", "cursor:pointer;");

		//Для закрашивания соответствующего элемента меню
		if (i == $iden_page) {  	

			$td.setAttribute("bgcolor", "dedede");
        	}
			
		$cell = $menu[i];
		$td.innerHTML = $cell;
		$tr.appendChild($td);
		$table.appendChild($tr);	
		$nav.appendChild($table);
		console.log($menu[i]+i);
	}
	

			
}
createMenu(_menu);