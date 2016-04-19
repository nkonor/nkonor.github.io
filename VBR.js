/*Объект в виде массива _data, содержит вложенные массивы со данными. 
Каждый вложенный массив соответствует строке таблицы данных*/
var _data = [
  [0,"t,c","m","10a","po","rus","co","16h","gap","alo","no","0000","habrahabr.ru","Книга «Minecraft. Программируй свой мир»","https://habrahabr.ru/company/piter/blog/269757/","http://www.piter.com/product/minecraft-programmiruy-svoy-mir",0],
  [1,"t,c","m","07a","po","rus","co","16h","gap","alo","no","0001","habrahabr.ru","Первая книга юного программиста. Учимся писать программы на Scratch","https://habrahabr.ru/company/piter/blog/266019/","http://www.piter.com/collection/A30690/product/pervaya-kniga-yunogo-programmista-uchimsya-pisat-programmy-na-scratch",0],
  [2,"ih","e","07a","f","eng,rus","co","99h","oop","alo","yes","0002","scratch.mit.edu","Scratch! You can program your own interactive stories, games, and animations — and share your creations with others in the online community.","https://habrahabr.ru/post/273003/","https://scratch.mit.edu/",58],
  [3,"ih,g","e","03a","f","rus,eng","un","99h","gap","alo","yes","0003","habrahabr.ru","Code Studio – open source продукт для обучения детей основам программирования.","https://habrahabr.ru/post/273003/","https://studio.code.org/",1],
  [4,"ih,g","e","03a","f","rus,eng","co","99h","gap","alo","yes","0004","habrahabr.ru","Blockly, создаёт программу при помощи соединения блоков. Эта игра позволяет создавать учебные задания, компоновать их в модули, проходя которые, ученик постепенно осваивает какую-то тему.","https://habrahabr.ru/post/273003/","https://blockly-games.appspot.com/?lang=ru",5],
  [5,"g","e","03a","f","rus","su","02h","gap","alo","yes","0005","habrahabr.ru","ПиктоМир, разработанный НИИСИ РАН по заказу Российской академии наук для обучения детей навык составления алгоритмов","https://habrahabr.ru/post/273003/","https://piktomir.niisi.ru/online/",2],
  [6,"g","e","07a","f","eng,rus","su","16h","gap","par","yes","0006","habrahabr.ru","Колобот — 3d стратегия, разработаная компанией Epsitec в 2001. Игра призвана обучить детей (от 10 лет и старше) навыкам программирования в игровой форме.","https://habrahabr.ru/post/273003/","https://github.com/colobot/colobot",3],
  [7,"ih,g","e","07a","f","eng,rus","co","99h","gap","alo","yes","0007","habrahabr.ru","Microsoft Imagine предлагает средства для обучения и разработки, начиная с самой первой игры или приложения до облачных исследовательских проектов с использованием больших данных. ","https://habrahabr.ru/post/273003/","https://msdn.microsoft.com/imagine/imagine-create",6],
  [8,"ih,g","e","07a","pf","rus","co","16h","gap","alo","yes","0008","habrahabr.ru","JavaRush — изучение программирования на Java в виде онлайн-игры.","https://habrahabr.ru/post/273003/","http://javarush.ru/login.html",7],
  [9,"g","e","07a","pf","rus,eng,ukr","co","16h","gap","alo","yes","0009","habrahabr.ru","Разработчики Code Combat предлагают учиться программированию, захватывая земли и побеждая врагов в лучших традициях RPG.","https://habrahabr.ru/post/273003/","http://codecombat.com/",8],
  [10,"ih","e","07a","f","eng","su","99h","gap","alo","yes","000A","habrahabr.ru","Мотивация к программированию, через 3д рисование (обзор проекта BeetleBlocks)","https://habrahabr.ru/company/makeitlab/blog/268639/","http://beetleblocks.com/",9],
  [11,"ih","e","07a","f","eng","su","16h","gap","alo","yes","000B","http://www.lookatme.ru/","Вы разрабатываете свои версии популярных игр и тем самым познаёте основы программирования на Scratch","http://www.lookatme.ru/mag/blogs/anton-mukhataev/217111-games-teach-how-to-code-for-beginners","https://www.gethopscotch.com/",11],
  [12,"ih","e","10a","f","eng","su","99h","gap","alo","yes","000C","http://www.lookatme.ru/","Курсы и возможность разработки игр","http://www.lookatme.ru/mag/blogs/anton-mukhataev/217111-games-teach-how-to-code-for-beginners","http://www.crunchzilla.com/",28],
  [13,"ih","e","10a","f","eng","le","00h","gap","alo","yes","000D","http://www.lookatme.ru/","Игра учит мыслить алгоритмически: вы пишите для робота программу, которая помогает ему решить пазл.","http://www.lookatme.ru/mag/blogs/anton-mukhataev/217111-games-teach-how-to-code-for-beginners","http://www.robozzle.com/",57],
  [14,"g","e","10a","f","eng","le","02h","gap","alo","yes","000E","http://www.lookatme.ru/","Подойдёт не только тем, кто любит «Доктора Кто», хотя фанаты, конечно, оценят больше всего. При желании можно игнорировать основную игру и сразу переходить к задачкам на программирование.","http://www.lookatme.ru/mag/blogs/anton-mukhataev/217111-games-teach-how-to-code-for-beginners","http://www.bbc.co.uk/cbbc/games/doctor-who-game",64],
  [15,"ih","e","10a","f","eng","su","16h","gap","alo","yes","000F","geektimes.ru","Интересный проект, разработанный в Институте Карнеги Меллона, предназначенный для школьников и студентов. Выстраивая в трёхмерном пространстве цепочки взаимодействия между разными предметами, молодые люди учатся объектному событийно-управляемому программированию.","https://geektimes.ru/company/mailru/blog/252920/","http://www.alice.org/index.php",45],
  [16,"ih,g","m, e","05a","po","eng","co","99h","gap","alo","yes","0010","geektimes.ru","Ozobot — это маленький робот, смахивающий на футуристический шлем космонавта, который движется по нарисованным траекториям. ","https://geektimes.ru/company/mailru/blog/252920/","http://ozobot.com/",18],
  [17,"ih,g","m, e","07a","po","eng,rus","su","99h","gap","alo","yes","0011","geektimes.ru"," Lego MindStorms — это продвинутый конструктор, с помощью которого можно создавать весьма сложных программируемых, дистанционно-управляемых роботов.","https://geektimes.ru/company/mailru/blog/252920/","http://www.lego.com/ru-ru/mindstorms",92],
  [18,"g","e","07a","po","eng","le","02h","gap","alo","yes","0012","geektimes.ru","Коллекция из 27 обучающих мобильных приложений, выполненных в оригинальной стилистике.","https://geektimes.ru/company/mailru/blog/252920/","http://tocaboca.com/apps/",99],
  [19,"g","m","07a","po","eng","le","00h","gap","alo","yes","0013","geektimes.ru","Code Monkey Island -  настольная игра для всей семьи.","https://geektimes.ru/company/mailru/blog/252920/","http://codemonkeyplanet.com/",88],
  [20,"g","e","03a","f","eng","le","00h","gap","alo","yes","0014","geektimes.ru","Милая браузерная игрушка (Lightbot Jr. для 4-8 лет и Lightbot — 9+)","https://geektimes.ru/company/mailru/blog/252920/","http://lightbot.com/hocflash.html",77],
  [21,"g","e","10a","f","eng","le","02h","gap","alo","yes","0015","geektimes.ru","В этой игре есть и экшен, и головоломки. Изюминка в том, что здесь нужно «хакать» объекты и персонажей, «перепрограммируя» их свойства, поведение, меняя правила самой игры.","https://geektimes.ru/company/mailru/blog/252920/","http://www.hacknslashthegame.com/",55],
  [22,"g","e","07a","f","eng","le","02h","gap","alo","yes","0016","geektimes.ru","В игре объединена аркада с псевдопрограммированием «на лету»","https://geektimes.ru/company/mailru/blog/252920/","http://betathegame.com/",66]
			],

	/*Переменная _rows содержит количество элементов в массиве _data, 
	которое соотствует количеству строк таблицы данных*/
	_rows = _data.length, 

    /*Переменная _columns содержит количество элементов вложенного массива _data, 
	которое соотствует количеству столбцов таблицы данных. 
	Предполагается, что количество элементов во вложенных массивах одинакого.*/
    _columns = _data[0].length,
    
    /*Переменная _numbers_columns содержит массив с номерами колонок с фильтрами*/
    _numbers_columns = [1,2,3,4,5,6,7,8,9,10]; 

    /*Переменная _hidden_columns содержит массив с номерами колонок, которые выводить в таблицу не требуется*/
    _hidden_columns = 11,

    /*Переменная ... содержит объект с наименованием видимых колонок для нулевой строки таблицы и номерами колонок в виде ключей*/
    _table_header = {
			11:"id<input type='button'title='Отсортировать' value='&#8645'name='sort0_11'onclick='sorting(0)'>",
			12:"источник",
			13:"наименование",
			14:"описание",
			15:"продукт",
			16:"тестовый рейтинг<input type='button'title='Отсортировать' value='&#8645'name='sort16'onclick='sorting(16)'>"},
//<input type='button'title='Отсортировать' value='&#8645'name='sort10'onclick="sorting(10)">
    /*Переменная ... содержит значение тру/фалс для для выбора актульного массива с данными*/	
    _switch_date = true,
    _update_data = _data.slice();
		



/*Функция recoveryFormatData восстанавливает/подготавливает формат данных, а именно:
1. восстанавливает гиперссылки,
2. преобразует элементы в численные массивы по разделителю "," 
Для работы в функцию необходимо передать массив с данными.
По завершению выполнения функция возврашает отформатированные данные*/
function recoveryFormatData(data) {
		
	var $data = data,
	    $rows = $data.length, 
	    $columns = $data[0].length;
	    

	for (var i=0; i < $rows; i++) {
		//1.восстанавливает гиперссылки
		$data[i][12] = '<a href=http://www.' + $data[i][12] + ' target=_blank>' + $data[i][12] + '</a>';
		$data[i][14] = '<a href=' + $data[i][14] + ' target=_blank title="Ссылка на описание"><img src="link1.gif" alt="ссылка" border="0" width="80" height="18"></a>';
		$data[i][15] = '<a href=' + $data[i][15] + ' target=_blank title="Ссылка на сайт продукта"><img src="link1.gif" alt="ссылка" border="0" width="80" height="18"></a>';
		//2.преобразует элементы в численные массивы по разделителю ","
		
		$data[i][10]=$data[i][10].split(',');
		$data[i][1]=$data[i][1].split(',');
		$data[i][2]=$data[i][2].split(',');
		$data[i][3]=$data[i][3].split(',');
		$data[i][4]=$data[i][4].split(',');
		$data[i][5]=$data[i][5].split(',');
		$data[i][6]=$data[i][6].split(',');
		$data[i][7]=$data[i][7].split(',');
		$data[i][8]=$data[i][8].split(',');
		$data[i][9]=$data[i][9].split(',');
		
	}	
return $data;
}

/*Запускаем функцию recoveryFormatData.
Передаём ей переменную с массивом данных.
Присваеваем отформатированный массив прежней переменной*/
_data = recoveryFormatData(_data);

//Первый вариант функции фильтрации. Удалить на стадии beta.
function filtrationData($col_number,$parametr) {
	
	var $col_number,
	    $parametr;
	
	for (var i=0; i < _rows; i++) {
		
		if (_data[i][$col_number] != $parametr) {
		
		_data.splice(i,1);
		i--;
		
		}
		_rows = _data.length;
	}
	
	//alert (_data.length + "," + _data[0].length);
}

//Вариант функции сортировки
/*function sortingData(columns) {
// для гарантированной сортивки приведём значения вложенного массива к численному формату 
	var $el_number=columns-1;
	//alert($el_number);
	for (var i=0; i < _data.length; i++) {
		//вариант для определённого элемента:
		_data[i][$el_number] = parseInt(_data[i][$el_number]);
		
		//вариант для всех элементов:
		//for (var j=0; j < _data[i].length; j++) {
		//_data[i][j] = parseInt(_data[i][j]);
		//}
	}
	
	function sortByMas(a,b) {
		if(a[$el_number]>b[$el_number]) {return 1;
		} else if(a[$el_number]<b[$el_number]) { return -1
			} else { return 0}
	}
	_data.sort(sortByMas);
}
*/
