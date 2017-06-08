/* GLOBAL VARS */
var overall = {
    'title': 'Overall',
    'categories': ['Overall'],
    'values': {
        'year2017': [300],
        'year2016': [260]
    }
};

var vendorsTop3 = {
    'title': 'VendorsTop3',
    'categories': ['ACS INDUSTRIES', 'TYSON FOODS, INC.', 'KELLOGG SALES COMPANY'],
    'values': {
        'year2017': [200, 180, 170],
        'year2016': [20, 40, 60]
    }
};

var vendorsBottom3 = {
    'title': 'VendorsBottom3',
    'categories': ['AZAR NUT', 'C.H. GUENTHER & SON INC.', 'PACTIV CORPORATION'],
    'values': {
        'year2017': [20, 50, 60],
        'year2016': [300, 240, 120]
    }
};

/* DOCUMENT READY*/
$(document).ready(function() {
    //getCSV();
    createChart('overall-chart', overall, '');
    createTable();
    $('#table-container').hide();

    $('#attendance-dropdown').change(function() {
        var selectedValue = $('#attendance-dropdown').val();

        if (selectedValue == 'overall') {
            $('#vendors-container').hide();
            $('#table-container').hide();
            $('#overall-container').show();
            createChart('overall-chart', overall, '');
        } else if (selectedValue == 'vendors') {
            $('#overall-container').hide();
            $('#table-container').show();
            $('#vendors-container').show();
            createChart('top3-chart', vendorsTop3, 'Largest Attendance Growth');
            createChart('bottom3-chart', vendorsBottom3, 'Largest Attendance Losses');
        }
    });
});

/* HELPER FUNCTIONS */
function createChart(div, data, title) {
    Highcharts.chart(div, {
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        xAxis: {
            categories: data.categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Attendance'
            }
        },    
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '2017',
            data: data.values.year2017

        }, {
            name: '2016',
            data: data.values.year2016

        }]
    });
}

function createTable() {
    $('#table').DataTable({
        "data": [
            {
                "vendor": "DART CONTAINER CORPORATION",
                "2017":   "50",
                "2016":   "40",
                "difference": "10"
            },
            {
                "vendor": "FRITO LAY, INC.",
                "2017":   "125",
                "2016":   "120",
                "difference": "5"
            },
            {
                "vendor": "DAISY BRAND, LLC",
                "2017":   "20",
                "2016":   "25",
                "difference": "-5"
            },
			{
                "vendor": "J.R. SIMPLOT",
                "2017":   "100",
                "2016":   "112",
                "difference": "-12"
            },
			{
                "vendor": "TYSON FOODS",
                "2017":   "110",
                "2016":   "105",
                "difference": "5"
            }
        ],
        "columns": [
            { "data": "vendor"},
            { "data": "2017"},
            { "data": "2016"},
            { "data": "difference"}
        ],
        paging: false,
        searching: false
    });
}

function getCSV() {
    $.ajax({
        type: "GET",
        url: "csv/food-show-attendance-2017.csv",
        dataType: "text",
        success: function(data) {
            processData(data);
        }
    });

    $.ajax({
        type: "GET",
        url: "csv/food-show-attendance-2016.csv",
        dataType: "text",
        success: function(data) {
            processData(data);
        }
    });
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 1; i < allTextLines.length; i++) {

        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j = 0; j < headers.length; j++) {
                tarr.push({
                    key: headers[j],
                    value: data[j]
                });
            }
            lines.push(tarr);
        }
    }
    console.log(lines);
}