 google.charts.load('current', {'packages' :['gauge']});
// controls in packages allows to use things like a slider
google.charts.setOnLoadCallback(drawChart);


function drawChart(){ 

 $.ajax({
    	url:"https://dweet.io/get/latest/dweet/for/roster.capably.sleepy.chamber",
    	dataType: "json",
    	success:function(data){
            if(data.this == 'succeeded'){
    		console.log(data.with[0].content)
    		 var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humidity', data.with[0].content.humidity],
          ['Temperature', data.with[0].content.temperature]
          
        ]);
           

            for (var i =0; i <  data.length; i++) {
                data.addRow([

                        data[i].with[0].content.humidity,
                        data[i].with[0].content.temperature, 
                

                ]);
            };
        var options = {
          width: 600, height: 600,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };
    
            var chart = new google.visualization.Gauge(document.getElementById('chart1'));
            chart.draw(data, options);

            
                }else{
                    $('#chart1').empty().append("<h2>Cannot get data from Dweet</h2>");
                }

    	},
    	error:function(error){
    		console.log('something went wrong')
    	}
    })

 }

 setInterval(function(){
          drawChart();     
            },5000);