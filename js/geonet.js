 google.charts.load('current', {'packages' :['corechart']});
// controls in packages allows to use things like a slider
google.charts.setOnLoadCallback(geonet);

function geonet(){

$.ajax({
	url:"https://api.geonet.org.nz/quake?MMI=3",
	dataType: "json",
	success: function(data){
   
		if(data.type == "FeatureCollection"){
 console.log(data)
	// 	var depth = [];
 //    var magnitude = [];
	// for (var i = 0; i < data.features.length; i++) {
 //      depth.push(data.features[i].properties.depth);            
 //      magnitude.push(data.features[i].properties.magnitude);  

         
 
 };
  // console.log(depth)
  // console.log(magnitude)
  var data = new google.visualization.DataTable();
  	data.addColumn('number', 'Depth');
    data.addColumn('number', 'Magnitude');

    

  for (var i =0; i < data.features; i++) {
      data.addRow([data.features[i].properties.depth, 
        data.features[i].properties.magnitude]);
  };


    var options = {
        title: 'Magnitude vs Depth',
        hAxis: {title: 'Depth', },
        vAxis: {title: 'Magnitude', },
       
        legend: 'none'
      };

      var chart = new google.visualization.ScatterChart(document.getElementById('chart1'));
      chart.draw(data, options);
  

	   // }else {
    //  $('#chart1').empty().append("<h2>Cannot get data from Geonet</h2>");
    //  }

		      

	},
	error: function(error){
console.log('cant get data')
	}
});

}



