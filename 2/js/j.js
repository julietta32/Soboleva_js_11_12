$(function(){
	var html = $('#test').html();
	var articles = [
	    {
		title:'Соболева Ольга Владимировна',
		content:'Сотрудник кредитного отдела'
	},
		{
		title:'Хочу учить фронтенд, потому что:',
		content:'В банке мало платят; Банки часто закрывают;В банке очень скучно'
	},
		{
		title:'Мой контактный телефон:',
		content:'+38 068 128 78 31'
	}
		
	];
var content = tmpl(html,{
	data: articles
});
	
	$('body').append(content)
})