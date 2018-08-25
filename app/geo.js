$(document).ready(function(){
	$('#btn').click(function() {
			let url = 'http://geocoding.geo.census.gov/geocoder/geographies/address?street=4600+Silver+Hill+Rd&city=Suitland&state=MD&benchmark=Public_AR_Census2010&vintage=Census2010_Census2010&layers=14&';

	$.ajax({
			url: url,
			data: {
				 'format':'jsonp'	
			},
			error: function(error){
				console.log(error);
			},
			jsonp: 'callback',
			dataType: 'jsonp',
			success: function(data){
				console.log(data);
			}, 
			type:'GET'
		});	/* end ajax */
	}); /* end button */
}); /* end doc.ready */

/*
access the json obj -->data.result.addressMatches[0].geographies['Census Blocks'][0] 
*/