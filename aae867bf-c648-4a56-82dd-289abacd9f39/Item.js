Highcharts.chart('items', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top Items By Sales',
        style: {
            fontSize: '15px'
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
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}M</b> in sales<br/>'
    },
    series: [{
        name: 'Item ',
        colorByPoint: true,
        data: [{
            name: 'PATTY, GRND BF',
            y: 0.79,
            drilldown: null
        }, {
            name: 'CHICKEN NUGGET',
            y: 0.73,
            drilldown: null
        }, {
            name: 'FAJITA',
            y: 0.71,
            drilldown: null
        }, {
            name: 'ENGLISH MUFFIN ',
            y: 0.49,
            drilldown: null
        }, {
            name: 'MAYONNAISE',
            y: 0.23,
            drilldown: null
        }, {
            name: 'DRESSING, BLEU CHEESE',
            y: 0.21,
            drilldown: null
        }, {
            name: 'RED PEPPER',
            y: 0.19,
            drilldown: null
        }, {
            name: 'SALT',
            y: 0.11,
            drilldown: null
        }, {
            name: 'COFEE',
            y: 0.09,
            drilldown: null
        },
         {
             name: 'SHRIMP',
             y: 0.08,
             drilldown: null
         }]
    }]
});