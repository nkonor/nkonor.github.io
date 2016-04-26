/*Библиотека функций для работы с таблицой данных*/

/*Место для полифилов*/

/*Для метода remove()*/
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

/*Окончания блока полифилов*/

/*Функция для построения базовой таблицы данных*/
function createTable($data, $rows, $columns, $hidden_columns) {
  		var	$data,
			$rows,
  			$columns,
  			$hidden_columns,
			$body = document.querySelector("body"),
  			$table, 
  			$tr,
  			$td,
  			//$text,
  			$cell;

  		$table = document.createElement("table");
  		$table.setAttribute("border", "1");
		$table.setAttribute("id", "maintable");



		for (var i=0; i < ($rows+1); i++) {
  			$tr = document.createElement("tr");
  			
  			for (var j = $hidden_columns; j < $columns; j++) {
				
				$td = document.createElement("td");					

				if (i!=0) {			//Вставляем нулевой строчкой заголовки колонок		
	
				
  				$cell = $data[i-1];
				$td.innerHTML = $cell[j];
  				$tr.appendChild($td);
				
				} else {
					
					$td.innerHTML = _table_header[j];
  					$tr.appendChild($td);
						
					}					

  			}
  			
  			$table.appendChild($tr);
  		}
  		$body.appendChild($table);
		
}



/*Функиця для обновления таблицы данных с учётом применения фильтров.
Запускается от клику на чекбоксах*/
function refreshTable($col_number) {
		


		
		//alert(_all_filters_marks.length);				
		//alert(document.getElementsByName(_all_filters_marks[0]).item(0).checked);
		//далее, создадим цикл, который будет перебирать все элементы массива и проверять input'ы с данными метками
		
	var $empty_checkbox = 0;

	_update_data = _data.slice(); // Создаём новый объект, точную копию массива _data
		
			
	for (var i = 0; i < _all_filters_marks.length; i++) {
		if (document.getElementsByName(_all_filters_marks[i]).item(0).checked==true) {
			//alert(_all_filters_marks[i]);
			filtrationData(_numbers_columns,_all_filters_marks[i]);
			refreshTable._update_data = _update_data;

			document.getElementById("maintable").remove();
				
			//updateTable();
			//console.log(_update_data);		
			
			createTable(_update_data, _update_data.length, _columns, _hidden_columns);

			$empty_checkbox++
			_switch_date = false;
		} 
			
	}
		//alert($empty_checkbox);
	if ($empty_checkbox==0) {
		document.getElementById("maintable").remove();
			createTable(_data, _rows, _columns, _hidden_columns);
			_switch_date = true;
	}
		
		
	//Функция фильтрации таблицы в соответствии с выбранными чекбоксами
	function filtrationData($numbers_columns,$parametr) {
		var $col_number,
		    $parametr,
		    $numbers_columns //количество и номера колонок, содержащих фильтры
				
		//для перебора содержания строки c метками чекбоксов	
		function perebor(i1) {
			
		for (var l=0; l < $numbers_columns.length; l++) {
			$col_number = $numbers_columns[l];

			//alert('Длинна массива с метками = '+_update_data[i1][$col_number].length);
			for (var j1=0; j1 < _update_data[i1][$col_number].length; j1++) {
				 
				if (_update_data[i1][$col_number][j1]==$parametr) {return true
				} //else {}		
			//alert('Заканчиваю первый '+j1+' цикл перебора по j1 (фильтрация)');
			}
		}
		}	
		
		//фильтрация исключением не прошедших условие элементов из массива (строки)
		for (var i1=0; i1 < _update_data.length; i1++) {
			if (perebor(i1)==undefined) {
				//alert('функция перебор вернула = '+perebor(i1));
				_update_data.splice(i1,1);
				i1--;
			//alert('Убираю строку не содержащую метку фильтра');
			}
		//alert('Заканчиваю '+i1+' цикл перебора по i1 (фильтрация)');
		}
	//alert('Отфильтровал таблицу!');
	//return _update_data;
	}
  	
  	
	//Функция для создания таблицы по обновлённым данным _update_data - УСТАРЕВШАЯ, ВМЕСТО НЕЁ РАБОТАЕТ creatTable

	function updateTable() {
  		
		//Вывод предупреждения об отсутствии данных, отвечающих условиям фильтрации
		if (_update_data=="") {alert("На текущий момент данных, отвечающих условиям фильтрации, нет")};	
		
	var	$uprows = _update_data.length,
		$upcolumns = _columns,
		$uphidden_columns = _hidden_columns,
 		$upbody = document.querySelector("body"),
  		$uptable, 
  		$uptr,
  		$uptd,
  		//$uptext,
  		$upcell;

  		$uptable = document.createElement("table");
  		$uptable.setAttribute("border", "1");
		$uptable.setAttribute("id", "maintable");

		for (var i=0; i < ($uprows+1); i++) {
  			$uptr = document.createElement("tr");
  			
  			for (var j = $uphidden_columns; j < $upcolumns; j++) {
  				$uptd = document.createElement("td");
  					
				if (i!=0) {
				$upcell = _update_data[i-1];
				$uptd.innerHTML = $upcell[j];
  				$uptr.appendChild($uptd);
				} else {
					$uptd.innerHTML = _table_header[j];
  					$uptr.appendChild($uptd);
					}
  			}
  			
  			$uptable.appendChild($uptr);
  		}
  		$upbody.appendChild($uptable);
		//alert('Отфильтрованную таблицу создал!');
		_switch_date = false;
		
	}
//console.log(_update_data);
}

//Функция сортировки 
function sorting(sort_columns_number) {
	var $sort_columns_number = sort_columns_number;
	
	if (_switch_date==true) {
		sortingData(_data,$sort_columns_number);
		document.getElementById("maintable").remove();
		createTable(_data,_rows, _columns, _hidden_columns);
	} else {
		sortingData(_update_data,$sort_columns_number);	
		document.getElementById("maintable").remove();
		createTable(_update_data, _update_data.length, _columns, _hidden_columns);
		console.log(_update_data);
		}
	
	function sortingData(data,$sort_columns_number) {
	
		var $el_number=$sort_columns_number;
		    $data = data;
				
		function sortByMas(a,b) {
			if(a[$el_number]>b[$el_number]) {return 1;
			} else if(a[$el_number]<b[$el_number]) { return -1
				} else { return 0}
		}
	$data.sort(sortByMas);
	

	}

}


//Функция для расскрытия блока (взято отсюда http://sitear.ru/material/svorachivanie-razvorachivanie-bloka-na-javascript#js-block)

function toggle(id,number_button)
{
        var e = document.getElementById(id);
        var dh = gh(id);
        var elems = e.getElementsByTagName('*');
	var num_button = 'img_button'+number_button;        

        if (e.style.display == "none")
        {
		document.getElementById(num_button).src='minus.png';
		//img_button.src='minus.png';
                for(var i=0; i<elems.length; i++){vhe(elems[i], "hidden");}
        
                e.style.height="1px";
                e.style.display = "block";
                for(var i=0;i<=100;i+=5)
                {
                        (function()
                                {
                                        var pos=i;
                                        setTimeout(function(){e.style.height = (pos/100)*dh+1+"px";},pos*5);
                                }
                        )();
                }
                setTimeout(function(){for(var i=0; i<elems.length; i++){elems[i].style.visibility="visible";}},500);
                return true;
        }
        else
        {
		document.getElementById(num_button).src='plus.png';
		//img_button.src='plus.png';
                var lh=dh-1+"px";
                
                for(var i=0; i<elems.length; i++){vhe(elems[i], "hidden");}
                
                for (var i=100;i>=0;i-=5)
                {
                        (function()
                                {
                                        var pos=i;
                                        setTimeout(function()
                                        {
                                                e.style.height = (pos/100)*dh+"px";
                                                if (pos<=0)
                                                {
                                                        e.style.display = "none";
                                                        e.style.height=lh;
                                                }
                                        },1000-(pos*5));
                                }
                        )();
                }
                return true;
        }
        return false;
}
function vhe(obj, vh){obj.style.visibility=vh;}
function gh(id)
{
        var e = document.getElementById(id);
        if(e.style.display == "none")
        {
                e.style.visibility = "hidden";
                e.style.display = "block";
                dh = e.clientHeight||e.offsetHeight+5; // Высота
                e.style.display = "none";
                e.style.visibility = "visible";
        }
        else
        {
                dh = e.clientHeight||e.offsetHeight+5; // Высота
        }
        return dh;
}

