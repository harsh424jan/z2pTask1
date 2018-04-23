function createTable(data, type){
	var tbl_htm='';
	if(type=='artist'){
		tbl_htm+='<table class="table table-hover"><thead><tr><th>Name</th><th>Description</th><th>Active Years</th></tr></thead>';
		$.each(data, function(index, value){
			tbl_htm+='<tr><td>'+value.name+'</td><td>'+value.description+'</td><td>'+value.years_active+'</td></tr>'
		});
		return tbl_htm;
	}else if(type=='album'){
		tbl_htm+='<table class="table table-hover"><thead><tr><th>Name</th><th>Artist</th><th>Release Date</th></tr></thead>';
		$.each(data, function(index, value){
			tbl_htm+='<tr><td>'+value.name+'</td><td>'+value.artist_id+'</td><td>'+value.release_date+'</td></tr>'
		});
		return tbl_htm;
	}else if(type=='track'){
		tbl_htm+='<table class="table table-hover"><thead><tr><th>Name</th><th>Album</th><th>Play Time</th></tr></thead>';
		$.each(data, function(index, value){
			tbl_htm+='<tr><td>'+value.name+'</td><td>'+value.album_id+'</td><td>'+value.play_time+'</td></tr>'
		});
		return tbl_htm;
	}
}


function showtb(s)
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange= function() {
		if(this.readyState==4 && this.status==200){
			console.log(s);
			console.log(this.response);
			
			var tbl_html = createTable(JSON.parse(this.response), s);
			console.log(tbl_html);
			$('#dbs').html(tbl_html);
		}
	}
	xhttp.open("post",s,true);
	xhttp.send();
 
	// window.alert('Hi');
}