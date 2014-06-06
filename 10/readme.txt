Замыкание - случай когда внутри функции создается вложенная функция имеющая доступ к переменным внешней функции, а функция обертка возвращает вызов внутренней функции. При отработке скрипта ссылка на переменную сохраняется живой, как и возможность вызова вложенной функции через функцию-обертку.

function addString() {
	var str = "string";
	return function() { return str + " string" }
}

var new_string = addString();

alert( new_string() ); // string string
alert( new_string() ); // string string string
alert( new_string() ); // string string string string

Внутренняя функция может принимать переменные и выполнять условия влияющие на выдачу, так можно манипулировать контекстом выдачи.

function addString() {
	var str = "string";
	return function(diff_string) { 
		if (diff_string !== undefined) return str + diff_string;
		else return str + " string" 
	}
}

var new_string = addString();

alert( new_string() ); // string string
alert( new_string() ); // string string string
alert( new_string("no_string") ); // string string string no_string