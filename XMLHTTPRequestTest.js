//XMLHTTPRequest On TinyWebDB Test.
//Just a template.
function apt(tin,wm){
	return '&' + tin + '=' + wm;
}
function apd(act){
	var yon = 'https://tinywebdb.appinventor.space/api?user=turbo317&secret=bb6dc299&action=' + act;
	return yon;
}
function pt(o,...args){
	var xhr = new XMLHttpRequest();
    var url = '';
	if (o === 'count'){
		url = apd(o);
	}
	else if (o === 'get'){
		url = apd(o) + apt('tag',args[0]);
	}
	else if (o === 'delete'){
		url = apd(o) + apt('tag',args[0]);
	}
	else if (o === 'update'){
		url = apd(o) + apt('tag',args[0]) + apt('value',args[1]);
	}
	else if (o === 'search'){
		url = apd(o) + apt('no',args[0]) + apt('count',args[1]) + apt('tag',args[2]) + apt('type',args[3]);
	}
	xhr.open("GET", url, false); 
	xhr.send();
	if (xhr.status === 200) {
	    return(xhr.responseText);
	} else {
	    return(xhr.statusText);
	}
}
