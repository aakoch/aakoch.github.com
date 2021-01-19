import 'bootstrap';

let image = new Image();
image.src = require("../assets/images/koch_motel.jpg");
//// First lets create our drawing surface out of existing SVG element
//// If you want to create new surface just provide dimensions
//// like s = Snap(800, 600);
////var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
////        fill: "none",
////        stroke: "#bada55",
////        strokeWidth: 5
////    });
////    p = p.pattern(0, 0, 10, 10);
//var element = $("a.svg svg").addClass("run-animation");
//element.mouseout(function (e) {
//  e.preventDefault;
//  console.dir(e.target);
//  var el = $(e.target).is('svg') ? $(e.target) : $(e.target).parent('svg');
//  console.dir(el[0]);
//
//  // -> removing the class
//  el.removeClass("run-animation");
////  
////  // -> triggering reflow /* The actual magic */
////  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
////  element.offsetWidth = element.offsetWidth;
//
//  // -> and re-adding the class
//  setTimeout(function () {$(el).addClass("run-animation")}, 100);
//
//});
////$('.avatar').hover(function () {
////  var that = $(this);
////  setTimeout(function() {
////    that.addClass('magictime puffOut');
////    setTimeout(function() {
////      that.removeClass('puffOut').addClass('puffIn');
////    }, 1000);
////  }, 1000);
////});
var skillsData = [{
    "year": 1995,
    "languages": [{
        "name": "Java",
        "percentUsed": 0.1
    }],
    "applications": [{
        "name": "Homesite",
        "percentUsed": 0.1
    }]
}];

data = [{
    "Date": 1995,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
}, {
    "Date": 1996,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
}, {
    "Date": 1997,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
}, {
    "Date": 1998,
    "Java": 0.1,
    "SQL": 0,
    "Javascript": 0.5
}, {
    "Date": 1999,
    "Java": 1,
    "SQL": 0,
    "Javascript": 0.5
}, {
    "Date": 2000,
    "Java": 0.1,
    "SQL": 0,
    "Javascript": 0.5
}, {
    "Date": 2001,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
}, {
    "Date": 2002,
    "Java": 0,
    "SQL": 0,
    "Javascript": 0.5
}, {
    "Date": 2003,
    "Java": 2,
    "SQL": 2,
    "Javascript": 0.5
}, {
    "Date": 2004,
    "Java": 3,
    "SQL": 3,
    "Javascript": 0.5
}, {
    "Date": 2005,
    "Java": 4,
    "SQL": 4,
    "Javascript": 1
}, {
    "Date": 2006,
    "Java": 5,
    "SQL": 5,
    "Javascript": 2
}, {
    "Date": 2007,
    "Java": 6,
    "SQL": 4,
    "Javascript": 3
}, {
    "Date": 2008,
    "Java": 7,
    "SQL": 3,
    "Javascript": 4
}, {
    "Date": 2009,
    "Java": 8,
    "SQL": 2,
    "Javascript": 6
}, {
    "Date": 2010,
    "Java": 9,
    "SQL": 1,
    "Javascript": 8
}, {
    "Date": 2011,
    "Java": 10,
    "SQL": 2,
    "Javascript": 10
}];
var ctx = $("#majorLanguages");

var newData = {
    'Java': [0,.5,.5,.5,.6,.7,.8,.9,1,2,3,4,5,6,7,8,9,10,11,12,13],
    'Javascript': [.5,.5,.5,.6,.7,.8,.9,1,2,3,4,5,6,7,8,9,10,11,12,12],
    'SQL': _.map(_.range(0, 16, .2), function(n) { return Math.round(n * 10) / 10; }),
    'Visual Basic': [0,1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    'PHP': [0,0,0,0,0,0,0,0,0,1,2,3,4,5,5,5]
};

var defaults = {
    fill: true,
    lineTension: 0.1,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    stepSize: 1
};
var datasets = [];



//$green: #378087;
//$offWhite: #E8E8EB;
//$lightBlue: #A9C5E1;
//$darkBlue: #253551;
//$gray: #828792;

var Color = net.brehaut.Color;
var colors = {
  green : Color("#378087"),
  offWhite : Color("#E8E8EB"), 
  lightBlue : Color("#A9C5E1"),
  darkBlue : Color("#253551"),
  gray : Color("#828792")
}

var chartColors = colors.green.fiveToneCScheme();


datasets.push(_.extend({
    label: 'Java',
    data: newData.Java,
  borderColor: chartColors[0].toString(),
  backgroundColor: chartColors[0].setAlpha(.4).toString()
}, defaults));
datasets.push(_.extend({
    label: 'Javascript',
    data: newData.Javascript,
  borderColor: chartColors[1].toString(),
  backgroundColor: chartColors[1].setAlpha(.4).toString()
}, defaults));
datasets.push(_.extend({
    label: 'SQL',
    data: newData.SQL,
  borderColor: chartColors[2].toString(),
  backgroundColor: chartColors[2].setAlpha(.4).toString()
}, defaults));
datasets.push(_.extend({
    label: 'Visual Basic',
    data: newData['Visual Basic'],
  borderColor: chartColors[3].toString(),
  backgroundColor: chartColors[3].setAlpha(.4).toString()
}, defaults));
datasets.push(_.extend({
    label: 'PHP',
    data: newData['PHP'],
  borderColor: chartColors[4].toString(),
  backgroundColor: chartColors[4].setAlpha(.4).toString()
}, defaults));



var majorLanguages = new Chart(ctx, {
    type: 'line',
    data: {
        labels: _.range(2000, 2018),
        datasets: datasets
    },
    options: {
        title: {
            display: true,
            text: 'Years of Experience (fake data for now)'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 16
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: true
    }
});