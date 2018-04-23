var artist,album,track;
function set(){
	document.getElementById("f1").innerHTML=arguments[0]+':';
	document.getElementById("f2").innerHTML=arguments[1]+':';
	document.getElementById("f3").innerHTML=arguments[2]+':';
	blank();
}
function blank(){
	document.getElementsByName("field3")[0].value="";
	document.getElementsByName("field1")[0].value="";
	document.getElementsByName("field2")[0].value="";
}
function populateArtist(){	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange= function() {
		if(this.readyState==4 && this.status==200){
			console.log(JSON.parse(this.response));
			var data = JSON.parse(this.response);
			var datalist='';
			$.each(data, function(index, value){
				datalist+= '<option value="'+value.name+'">';
			});
			$('#l1').html(datalist);
		}
		
	}
	xhttp.open("get","artistname",true);
	xhttp.send();
	set('Artist Name','Description','Active Years');
}
function populateAlbum(id){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange= function() {
		if(this.readyState==4 && this.status==200)
			console.log(this.response);
	}
	xhttp.open("get","artistid",true);
	xhttp.send();
	var xhhtp2 = new XMLHttpRequest();
	xhhtp2.onreadystatechange =function() {
		if(this.readyState==4 && this.status==200)
			console.log(this.response);
	}
	xhhtp2.open("get","albumname",true);
	xhhtp2.send();
	set('Album Name','Artist','Release Date');
}
function populateTrack(id){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange= function() {
		if(this.readyState==4 && this.status==200)
			console.log(this.response);
	}
	xhttp.open("get","albumid",true);
	xhttp.send();
	var xhhtp2 = new XMLHttpRequest();
	xhhtp2.onreadystatechange =function() {
		if(this.readyState==4 && this.status==200)
			console.log(this.response);
	}
	xhhtp2.open("get","trackname",true);
	xhhtp2.send();
	set('Track','Album','Playtime');
}