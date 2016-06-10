
// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
//var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
//        fill: "none",
//        stroke: "#bada55",
//        strokeWidth: 5
//    });
//    p = p.pattern(0, 0, 10, 10);
var element = $("svg").addClass("run-animation");
element.mouseout(function (e) {
  e.preventDefault;
  console.dir(e.target);
  var el = $(e.target).is('svg') ? $(e.target) : $(e.target).parent('svg');
  console.dir(el[0]);

  // -> removing the class
  el.removeClass("run-animation");
//  
//  // -> triggering reflow /* The actual magic */
//  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
//  element.offsetWidth = element.offsetWidth;

  // -> and re-adding the class
  setTimeout(function () {$(el).addClass("run-animation")}, 100);

});
//$('.avatar').hover(function () {
//  var that = $(this);
//  setTimeout(function() {
//    that.addClass('magictime puffOut');
//    setTimeout(function() {
//      that.removeClass('puffOut').addClass('puffIn');
//    }, 1000);
//  }, 1000);
//});
data = [
  {
    "Date": 1995,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
  },
  {
    "Date": 1996,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
  },
  {
    "Date": 1997,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
  },
  {
    "Date": 1998,
    "Java": 0.1,
    "SQL": 0,
    "Javascript": 0.5
  },
  {
    "Date": 1999,
    "Java": 1,
    "SQL": 0,
    "Javascript": 0.5
  },
  {
    "Date": 2000,
    "Java": 0.1,
    "SQL": 0,
    "Javascript": 0.5
  },
  {
    "Date": 2001,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
  },
  {
    "Date": 2002,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
  },
  {
    "Date": 2003,
    "Java": 2,
    "SQL": 2,
    "Javascript": 0.5
  },
  {
    "Date": 2004,
    "Java": 3,
    "SQL": 3,
    "Javascript": 0.5
  },
  {
    "Date": 2005,
    "Java": 4,
    "SQL": 4,
    "Javascript": 1
  },
  {
    "Date": 2006,
    "Java": 5,
    "SQL": 5,
    "Javascript": 2
  },
  {
    "Date": 2007,
    "Java": 6,
    "SQL": 4,
    "Javascript": 3
  },
  {
    "Date": 2008,
    "Java": 7,
    "SQL": 3,
    "Javascript": 4
  },
  {
    "Date": 2009,
    "Java": 8,
    "SQL": 2,
    "Javascript": 6
  },
  {
    "Date": 2010,
    "Java": 9,
    "SQL": 1,
    "Javascript": 8
  },
  {
    "Date": 2011,
    "Java": 10,
    "SQL": 2,
    "Javascript": 10
  }
];
var ctx = $("#myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: _.pluck(data, 'Date'),
        datasets: [{
            label: 'Java',
            data: _.pluck(data, 'Java'),
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            stepSize: 1
        },
         {
            label: 'Javascript',
            data: _.pluck(data, 'Javascript'),
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75, 89, 192,0.4)",
            borderColor: "rgb(75, 89, 192)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75, 89, 192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75, 89, 192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            stepSize: 1
        },
         {
            label: 'SQL',
            data: _.pluck(data, 'SQL'),
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75, 192, 102,0.4)",
            borderColor: "rgb(75, 192, 102)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75, 192, 102,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75, 192, 102,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            stepSize: 1
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Years of Experience (fake data for now)'
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
      responsive: false,
      maintainAspectRatio: true
    }
});