var element=$("svg").addClass("run-animation");element.mouseout(function(a){a.preventDefault,console.dir(a.target);var r=$(a.target).is("svg")?$(a.target):$(a.target).parent("svg");console.dir(r[0]),r.removeClass("run-animation"),setTimeout(function(){$(r).addClass("run-animation")},100)}),data=[{Date:1995,Java:0,SQL:0,Javascript:.5},{Date:1996,Java:0,SQL:0,Javascript:.5},{Date:1997,Java:0,SQL:0,Javascript:.5},{Date:1998,Java:.1,SQL:0,Javascript:.5},{Date:1999,Java:1,SQL:0,Javascript:.5},{Date:2e3,Java:.1,SQL:0,Javascript:.5},{Date:2001,Java:0,SQL:0,Javascript:.5},{Date:2002,Java:0,SQL:0,Javascript:.5},{Date:2003,Java:2,SQL:2,Javascript:.5},{Date:2004,Java:3,SQL:3,Javascript:.5},{Date:2005,Java:4,SQL:4,Javascript:1},{Date:2006,Java:5,SQL:5,Javascript:2},{Date:2007,Java:6,SQL:4,Javascript:3},{Date:2008,Java:7,SQL:3,Javascript:4},{Date:2009,Java:8,SQL:2,Javascript:6},{Date:2010,Java:9,SQL:1,Javascript:8},{Date:2011,Java:10,SQL:2,Javascript:10}];var ctx=$("#myChart"),myChart=new Chart(ctx,{type:"line",data:{labels:_.pluck(data,"Date"),datasets:[{label:"Java",data:_.pluck(data,"Java"),fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,stepSize:1},{label:"Javascript",data:_.pluck(data,"Javascript"),fill:!1,lineTension:.1,backgroundColor:"rgba(75, 89, 192,0.4)",borderColor:"rgb(75, 89, 192)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75, 89, 192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75, 89, 192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,stepSize:1},{label:"SQL",data:_.pluck(data,"SQL"),fill:!1,lineTension:.1,backgroundColor:"rgba(75, 192, 102,0.4)",borderColor:"rgb(75, 192, 102)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75, 192, 102,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75, 192, 102,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,stepSize:1}]},options:{title:{display:!0,text:"Years of Experience (fake data for now)"},scales:{yAxes:[{ticks:{beginAtZero:!0}}]},responsive:!1,maintainAspectRatio:!0}});