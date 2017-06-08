var overall = {
    'categories': ['Overall'],
    'values': {
        'year2017': [12635056.24],
        'year2016': [11688288.33]
    }
};

var CustomerTop3 = {
    'categories': ['Stripes', 'Dairy Queen', 'Chuys'],
    'values': {
        'year2017': [100000, 75000, 35000],
        'year2016': [82300, 65020, 27500]
    }
};

var CustomerBottom3 = {
    'categories': ['University Health', 'Uncles Convenience Stores', 'El Tigre'],
    'values': {
        'year2017': [75000, 99000, 25000],
        'year2016': [25000, 60000, 0]
    }
};

var VendorTop3 = {
    'categories': ['DSM', 'Basic American Foods', 'Simplot'],
    'values': {
        'year2017': [4000000, 1250000, 1100000],
        'year2016': [2000000, 800000, 500000]
    }
};

var VendorBottom3 = {
    'categories': ['JM Smucker', 'Hillshire Brands', 'Ventura Foods'],
    'values': {
        'year2017': [2000000, 1250000, 1000000],
        'year2016': [2500000, 1500000, 1250000]
    }
};
	
var ItemTop3 = {
    'categories': ['Chicken Nugget Raw', 'Napkin Beverage 1-Ply', 'Picante Sauce'],
    'values': {
        'year2017': [125000, 95000, 25000],
        'year2016': [100000, 80000, 15000]
    }
};

var ItemBottom3 = {
    'categories': ['Corn Fresh', 'Gloves', 'Tea Bags'],
    'values': {
        'year2017': [100000, 80000, 15000],
        'year2016': [125000, 95000, 25000]
    }
};
$(document).ready(function() {
    //getCSV();
    createChart('overall-chart', overall, '');
    //createTable();
	
	$('#viewSelect').change(function() {
        var selectedValue = $('#viewSelect').val();

        if (selectedValue == 'Overall') {
			$('#customers-container').hide();
			$('#vendors-container').hide();
			$('#items-container').hide();
			$('#overall-container').show();
			createChart('overall-chart', overall, '');
        } else if (selectedValue == 'Customer') {
			$('#overall-container').hide();
			$('#vendors-container').hide();
			$('#items-container').hide();
			$('#customers-container').show();
            createChart('top3-chart', CustomerTop3, 'Largest Sales Growth ($)');
            createChart('bottom3-chart', CustomerBottom3, 'Largest Sales Losses ($) ');
        } else if (selectedValue == 'Vendor') {
			$('#overall-container').hide();
			$('#customers-container').hide();
			$('#items-container').hide();
			$('#vendors-container').show();
            createChart('vendorstop3-chart', VendorTop3, 'Largest Sales Growth ($)');
            createChart('vendorsbottom3-chart', VendorBottom3, 'Largest Sales Losses($)');
		} else if (selectedValue == 'Item') {
			$('#overall-container').hide();
			$('#customers-container').hide();
			$('#vendors-container').hide();
			$('#items-container').show();
            createChart('itemstop3-chart', ItemTop3, 'Largest Sales Growth ($)');
            createChart('itemsbottom3-chart', ItemBottom3, 'Largest Sales Losses ($)');
		}
    });

});

function createChart(div, data, title) {
    var chart = Highcharts.chart(div, {
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
                text: 'Sales ($)'
            }
        },    
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b> ${point.y}</b></td></tr>',
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
    $('#my-table').DataTable();
}

function getCSV() {
    console.log("MADE IT");
    $.ajax({
        type: "GET",
        url: "csv/food-show-sales-2017.csv",
        dataType: "text",
        success: function(data) {
            processData(data);
        }
    });

    $.ajax({
        type: "GET",
        url: "csv/food-show-sales-2016.csv",
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

function createCustomerChart() {
    var chart = Highcharts.chart('sample-chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                "Overall"
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Sales ($)'
            }
        },    
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b> ${point.y}</b></td></tr>',
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
            data: [12635056.24]

        }, {
            name: '2016',
            data: [11688288.33]

        }]
    });
}