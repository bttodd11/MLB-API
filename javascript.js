

$(document).ready(function () {

	var xmlhttp = new XMLHttpRequest();
	const url = 'http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code=%27mlb%27&all_star_sw=%27N%27&sort_order=name_asc&season=%272019%27';
	const playerUrl = 'http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=%27121%27'
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			console.log(myArr)

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
					'<a href="' + arr[i].base_url + '">' + arr[i].base_url + '</a><br><br>' 
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
					 '<p>' + arr[i].venue_name + '</p>' +
					 '<a href="' + arr[i].base_url + '">' + arr[i].base_url + '</a><br><br>' 
		}
		document.getElementById('nlTeam').innerHTML = out;
	}

	function teamId(arr){
		var out = "";
		var t;
		for (t = 0; i < arr.length; i++){
			'http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=%27' + arr[t].team_id + '%27'
		}

	}

})

