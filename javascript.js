

$(document).ready(function(){

	var xmlhttp = new XMLHttpRequest();
	const url = 'http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code=%27mlb%27&all_star_sw=%27N%27&sort_order=name_asc&season=%272017%27'
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			console.log(myArr.team_all_season.queryResults.row)
			myFunction(myArr.team_all_season.queryResults.row);
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(arr) {
		var out = "";
		var i;
		for(i = 0; i < arr.length; i++) {
			out += '<p>' + arr[i].name_display_long + '</p>' + 
			'<p>' + arr[i].league + '</p><br>';
		}
		document.getElementsByClassName('col-sm').innerHTML = out;
	}

})

