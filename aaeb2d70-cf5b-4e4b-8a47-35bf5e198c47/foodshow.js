var maxRows = 15 ;

function updateCustomer() {
	console.log('typy');
	
	var query = $('#custSearch').val().toLowerCase();

	var newFiltered = {};
	var count = 0;
	for (var cst in model.$data.mappedCustomers) {
		var cust = model.$data.mappedCustomers[cst];
		if (cust.name.toLowerCase().includes(query) || cust.number.toString().includes(query)) {
			newFiltered[cst] = cust;
			count++;
			if (count >= maxRows) {
				break;
			}
		}
	}
		
	model.$set(model.$data, 'filteredCustomers', newFiltered);

	setTimeout(() =>  BuildCustomerCharts(), 500);
}


//Vue.directive('drawGraph', {
//    // When the bound element is inserted into the DOM...
//    inserted: function (el) {
//        var id = el.attr('data-id')
//        var input2016 = parseInt(el.attr('data-sales2016'))
//        var input2017 = parseInt(el.attr('data-sales2017'))
//        var input = JSON.stringify({
//            'Year2016': input2016,
//            'Year2017': input2017
//        });
//        BuildChart('customerChart_' + id, 'Total Sales', 'Sales', input, false);
//    }
//})

var model = new Vue({
    el: '#app',
    data: {
        attendance2016: {},
        attendance2017: {},
        sales2016: {},
        sales2017: {},
        mappedCustomers: {},
        filteredCustomers: {},
        customerSearchInput: 'search by name or number'
    },
    filters: {
        formatCurrency: function (amount) {
            return amount.toLocaleString("en-US", { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        },
        formatDate: function (date, format) {
            return moment(date).format(format);
        },
        formatTimeSpan: function (timeSpan, format) {
            return moment('2017-04-04T' + timeSpan).format(format);
        },
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    methods: {
        updateCustomer: updateCustomer
    }
});

function initializeVueModel() {
	$.ajax({
		url: 'Sales_Data_2016.json',
		type: 'GET',
		contentType: 'application/json',
		dataType: 'json'
	}).done(function (data, textStatus, jqXHR) {
		model.$set(model.$data, 'sales2016', data);
		buildInitialData();
	});

	$.ajax({
		url: 'Sales_Data_2017.json',
		type: 'GET',
		contentType: 'application/json',
		dataType: 'json'
	}).done(function (data, textStatus, jqXHR) {
		model.$set(model.$data, 'sales2017', data);
		buildInitialData();
	});
}

function buildInitialData() {
    if (!model.$data.sales2016.length) {
        console.log('2016 sales not loaded yet');
        return;
    }
    if (!model.$data.sales2017.length) {
        console.log('2017 sales not loaded yet');
        return;
    }

	console.log('all data ready');

	model.$data.sales2016.forEach(
		function (customerItemCombo) {
			if (!model.$data.mappedCustomers[customerItemCombo.accountNumber]) {
				model.$set(model.$data.mappedCustomers, customerItemCombo.accountNumber,
					{
						number: customerItemCombo.accountNumber,
						name: customerItemCombo.accountName,
						cases2016: customerItemCombo.caseQuantity,
						cases2017: 0,
						sales2016: customerItemCombo.caseQuantity * customerItemCombo.itemCaseCost,
						sales2017: 0
					});
			}
			else {
				model.$data.mappedCustomers[customerItemCombo.accountNumber].cases2016 += customerItemCombo.caseQuantity;
				model.$data.mappedCustomers[customerItemCombo.accountNumber].sales2016 += customerItemCombo.caseQuantity * customerItemCombo.itemCaseCost;
			}
		});

	model.$data.sales2017.forEach(
		function (customerItemCombo) {
			if (!model.$data.mappedCustomers[customerItemCombo.accountNumber]) {
				model.$set(model.$data.mappedCustomers, customerItemCombo.accountNumber,
					{
						number: customerItemCombo.accountNumber,
						name: customerItemCombo.accountName,
						cases2016: 0,
						cases2017: customerItemCombo.caseQuantity,
						sales2016: 0,
						sales2017: customerItemCombo.caseQuantity * customerItemCombo.itemCaseCost
					});
			}
			else {
				model.$data.mappedCustomers[customerItemCombo.accountNumber].cases2017 += customerItemCombo.caseQuantity;
				model.$data.mappedCustomers[customerItemCombo.accountNumber].sales2017 += customerItemCombo.caseQuantity * customerItemCombo.itemCaseCost;
			}
		});

	var filtered = {};
	var count = 0;
	for (var cst in model.$data.mappedCustomers) {
		filtered[cst] = model.$data.mappedCustomers[cst];
		count++;
		if (count >= maxRows) {
			break;
		}
	}
	model.$set(model.$data, 'filteredCustomers', filtered);
	
	BuildTotalCharts();

	setTimeout(() =>  BuildCustomerCharts(), 1000);

}

$(document).ready(function () {
	"use strict";

	initializeVueModel();
});


function BuildTotalCharts() {
    var input1 = JSON.stringify({
        'Year2016': 5500,
        'Year2017': 6000
    });
    var input2 = JSON.stringify({
        'Year2016': 300,
        'Year2017': 350
    });

	BuildChart('totalSalesChart', 'Total Sales', 'Sales', input1, true);
	BuildChart('totalAttendanceChart', 'Total Attendance', 'Attendance', input2, true);
}

function BuildCustomerCharts() {
	$('.customerChart').each(function () {
		var id = $(this).attr('data-id')
		var input2016 = parseInt($(this).attr('data-sales2016'))
		var input2017 = parseInt($(this).attr('data-sales2017'))
		var input = JSON.stringify({
			'Year2016': input2016,
			'Year2017': input2017
		});
		BuildChart('customerChart_' + id, 'Total Sales', 'Sales', input, false);
	});       
}

function BuildChart(id, title, seriesName, inputData, isTotal) {

	var data = jQuery.parseJSON(inputData);

	Highcharts.chart(id, {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		subtitle: {
			text:  (isTotal == true )? title: ''
		},
		xAxis: {
			categories: [(isTotal == true) ? '2016' : '', (isTotal == true) ? '2017' : ''],
			title: {
				text: null
			},
			lineWidth: 0,
			minorGridLineWidth: 0,
			lineColor: 'transparent',
			minorTickLength: 0,
			tickLength: 0,
			gridLineColor: 'transparent'
		},
		yAxis: {
			min: 0,
			title: {
				text: '', //'Sales in $',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			},
			lineWidth: 0,
			minorGridLineWidth: 0,
			lineColor: 'transparent',
			minorTickLength: 0,
			tickLength: 0,
			gridLineColor: 'transparent',
			labels: {
				enabled: false
			}
		},
		tooltip: {
			valuePrefix: (seriesName === 'Sales') ? '$' : ''
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		series: [{
			name: seriesName,
			data: [{ y: data.Year2016 }, { y: data.Year2017, color: 'black' }]
		}]

	});
}
