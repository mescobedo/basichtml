$(document).ready( function() {
    let totalSalesJson = $.getJSON('TotalAttendance.json', function (data) {
        LoadTotalAttendance(data);
    });
    LoadAttendance();
});

function LoadTotalAttendance(jsonData) {
    let percentageReached = AttendanceCalculatePercentageReached(jsonData[0]);

    Highcharts.chart('totalAttendance', {
        chart: {
            type: 'bar',
            margin: 5,
            height: 150
        },
        title: {
            text: 'Total Attendance (# of customers)',
            align: 'left'
        },
        xAxis: [{
            visible: false
        }],
        yAxis: [{
            title: {
                text: ''
            },
            offset: -60
        }],
        legend: {
            shadow: false,
            align: 'right',
            verticalAlign: 'top',
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            bar: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: '2016',
            color: 'rgba(102, 153, 255,1)',
            data: [1122],
            pointPadding: 0.3,
            pointPlacement: -0.2
        }, {
            name: '2017',
            color: 'rgba(102, 255, 102,.9)',
            data: [2261],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }]
    },
        function (chart) {
            chart.renderer.label(percentageReached + "%", 190, 110, null, null, null)
                .css({
                    color: '#FFFFFF'
                })
                .attr({
                    fill: 'rgba(0, 0, 0, 0.75)',
                    padding: 8,
                    r: 5,
                    zIndex: 6
                })
                .add();

        });
}

function AttendanceCalculatePercentageReached(jsonData) {
    let pastYearSales = jsonData.PastTotalAttendance;
    let currentYearSales = jsonData.CurrentTotalAttendance;

    return Math.round((currentYearSales / pastYearSales) * 100, -2);
}

function LoadAttendance() {
    Highcharts.chart('container', {
        chart: {
            zoomType: 'xy',
            border: 1
        },
        title: {
            text: 'Customer Attendance'
        },
        subtitle: {
            text: 'All Customers'
        },
        xAxis: [{
            categories: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
                '3:00 PM', '4:00 PM', '5:00 PM'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Number of Customers',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: '2017 Customers/Hour',
            type: 'column',
            data: [15, 	150, 	312, 	475, 	526, 	429, 	237, 	106, 	11],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Total 2017 Customers',
            type: 'spline',
            data: [15, 	165, 	477, 	952, 	1478, 	1907, 	2144, 	2250, 	2261],
            tooltip: {
                valueSuffix: '°C'
            }
        }, {
            name: 'Total 2016 Customers',
            type: 'spline',
            dashStyle: 'longdash',
            data: [1122,1122, 	1122, 	1122, 	1122, 	1122, 	1122, 	1122, 	1122],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
}