Highcharts.chart('customer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top Customers By Sales',
        style: {
            fontSize: '15px'
        }
    },
    subtitle: {
        text: 'Click the columns to view which vendors a particular customer has visited. ',
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
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}M</b> in sales<br/>',
        crosshairs: [true, true],
    },

    series: [{
        name: 'Customer',
        colorByPoint: true,
        data: [{
            name: 'STRIPES SSP PARTNERS',
            y: 3.81,
            drilldown: 'STRIPES SSP PARTNERS'
        }, {
            name: 'DAIRY QUEEN-TEXAS',
            y: 1.93,
            drilldown: 'DAIRY QUEEN-TEXAS'
        }, {
            name: 'SCHLITTERBAHN SPI-BEACH',
            y: 1.38,
            drilldown: 'SCHLITTERBAHN SPI-BEACH'
        }, {
            name: 'CHUYS',
            y: 1.17,
            drilldown: 'CHUYS'
        }, {
            name: 'ALAMO CAFE',
            y: 0.71,
            drilldown: 'ALAMO CAFE'
        }, {
            name: 'K-BOBS',
            y: 0.54,
            drilldown: 'K-BOBS'
        }, {
            name: 'HACIENDA VIEJA',
            y: 0.49,
            drilldown: 'HACIENDA VIEJA'
        }]
    }],
    drilldown: {
        series: [{
            name: 'STRIPES SSP PARTNERS',
            id: 'STRIPES SSP PARTNERS',
            data: [
                ['DIRECT SOURCE MEATS', 0.5], ['HEINZ', 0.42], ['LAND OLAKES, INC.', 0.38], ['TYSON', 0.26], ['ECOLAB', 0.2], ['J & J SNACK', 0.19], ['HILLSHIRE BRANDS', 0.14], ['PACTIV CORPORATION', 0.14], ['KRAFT FOODS', 0.12], ['ACH FOOD', 0.1], ['SCHWANS FOOD SERVICE', 0.1]
            ],
        }, {
            name: 'DAIRY QUEEN-TEXAS',
            id: 'DAIRY QUEEN-TEXAS',
            data: [['TYSON', 0.54], ['KRAFT FOODS', 0.3], ['SCHWANS FOOD.', 0.25], ['NESTLE BRANDS', 0.17], ['FRITO LAY, INC.', 0.16], ['AMERICANA', 0.07]]
        }, {
            name: 'SCHLITTERBAHN SPI-BEACH',
            id: 'SCHLITTERBAHN SPI-BEACH',
            data: [['TYSON', 0.54], ['KRAFT FOODS', 0.3], ['SCHWANS FOOD.', 0.25], ['NESTLE BRANDS', 0.17], ['FRITO LAY, INC.', 0.16], ['AMERICANA', 0.07]]

        }, {
            name: 'CHUYS',
            id: 'CHUYS',
            data: [['SCHWANS FOOD', 0.54], ['DIRECT SOURCE MEATS', 0.3], ['TYSON', 0.25], ['NESTLE BRANDS', 0.17], ['FRITO LAY, INC.', 0.16], ['AMERICANA', 0.07]]
        }, {
            name: 'ALAMO CAFE',
            id: 'ALAMO CAFE',
            data: [
                ['v12.x', 0.34], ['v28', 0.24], ['v27', 0.17], ['v29', 0.16]
            ]
        }, {
            name: 'K-BOBS',
            id: 'K-BOBS',
            data: [['TYSON', 0.24], ['KRAFT FOODS', 0.17], ['SCHWANS FOOD.', 0.1], ['NESTLE BRANDS', 0.1], ['FRITO LAY, INC.', 0.09], ['AMERICANA', 0.07]]
        }, {
            name: 'HACIENDA VIEJA',
            id: 'HACIENDA VIEJA',
            data: [['TYSON', 0.2], ['KRAFT FOODS', 0.1], ['SCHWANS FOOD.', 0.05], ['NESTLE BRANDS', 0.05]]
        }]
    }
});