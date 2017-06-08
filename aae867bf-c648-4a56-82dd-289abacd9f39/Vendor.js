// FS sales by Vendor

//<script src="https://code.highcharts.com/highcharts.js"></script>
//<script src="https://code.highcharts.com/modules/data.js"></script>
//<script src="https://code.highcharts.com/modules/drilldown.js"></script>

//<div id="vendor" style="min-width: 510px; height: 400px; margin: 0 auto"></div>


// FS sales by Vendor
Highcharts.chart('vendor', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top Vendors By Sales',
        style: {
            fontSize: '15px'
        }
    },
    subtitle: {
        text: 'Hover over the columns to view customer attendance by vendor. ',
        style: {
            fontSize: '10px'
        }
    },
    colors: ['darkblue'],
    xAxis: {
        type: 'category',
        labels: {
            rotation: -0,
            style: {
                fontSize: '8px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Sales (in millions)'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '${point.y:.2f}M',
                rotation: 0,
                style: {
                    fontSize: '8px'
                }
            }
        }
    },

    tooltip: {
        crosshairs: [true, true],
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}M</b> in sales<br/><br> <span style="color:{point.color}">Customer Attendance</span>: <b>' + 643 + ' </b> <br/>'
    },
    series: [{
        name: 'Vendor',
        colorByPoint: true,
        data: [{
            name: 'TYSON',
            y: 2.79,
            drilldown: null
        }, {
            name: 'HILLSHIRE BRANDS',
            y: 1.99,
            drilldown: null
        }, {
            name: 'NESTLE BRANDS',
            y: 1.83,
            drilldown: null
        }, {
            name: 'KRAFT FOODS',
            y: 1.23,
            drilldown: null
        }, {
            name: 'DIRECT SOURCE MEATS',
            y: 0.98,
            drilldown: null
        }, {
            name: 'ECOLAB',
            y: 0.77,
            drilldown: null
        }, {
            name: 'DAISY BRAND',
            y: 0.65,
            drilldown: null
        }, {
            name: 'TAYLOR FARM',
            y: 0.53,
            drilldown: null
        }, {
            name: 'NORPAC',
            y: 0.49,
            drilldown: null
        }, {
            name: 'KENS FOOD',
            y: 0.33,
            drilldown: null
        }]
    }]
});
