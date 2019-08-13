

$(document).ready(function () {

	var xmlhttp = new XMLHttpRequest();
	const url = 'http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code=%27mlb%27&all_star_sw=%27N%27&sort_order=name_asc&season=%272019%27'
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			console.log(myArr.team_all_season.queryResults.row)
			alTeam(myArr.team_all_season.queryResults.row);
			nlTeam(myArr.team_all_season.queryResults.row)
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function alTeam(arr) {
		var out = "";
		var i;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].league == "AL") {
				out += '<p>' + arr[i].name_display_long + '</p>' +
					'<p>' + arr[i].league_full + '</p>' +
					'<p>' + arr[i].venue_name +  '</p>' +
					'<a href=' + arr[i].store_url + '</a>' 
			}
		}
		document.getElementById('alTeam').innerHTML = out;
	}

	function nlTeam(arr) {
		var out = "";
		var i;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].league == "NL")
				out += '<p>' + arr[i].name_display_long + '</p>' +
					'<p>' + arr[i].league_full + '</p>' +
					 '<p>' + arr[i].venue_name + '<br>' +
					 '<a href=' + arr[i].store_url + '</a>';
		}
		document.getElementById('nlTeam').innerHTML = out;
	}

})

