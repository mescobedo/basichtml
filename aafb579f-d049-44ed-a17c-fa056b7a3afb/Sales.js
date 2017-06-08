$(document).ready(function () {
    let totalSalesJson = $.getJSON('TotalSales.json', function (data) {
        LoadTotalSales(data);
    });
    let salesByCustomer = $.getJSON('TotalCustomerSales.json', function (data) {
        LoadCustomerSales(data);
    });
});

function LoadCustomerSales(jsonData) {
    let customerCategories = jsonData.map((customerItem) => customerItem.CustomerName);
    let customerSeries = RetrieveSeries(jsonData);
    Highcharts.chart('salesByCustomer', {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: [{
            categories: customerCategories,
            scrollbar: {
                enabled: true
            },
        }],
        yAxis: [{
            title: {
                text: ''
            }
        }],
        legend: {
            visible: false,
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            bar: {
                grouping: false,
                shadow: false
            }
        },
        series: customerSeries
    });
}

function RetrieveCategories(jsonData) {
    let categories = [];

}

function RetrieveSeries(jsonData) {
    let seriesArr = [];
    $.each(jsonData, function (index, value) {
        let seriesObjPast =
            {
                name: '2016',
                color: 'rgba(102, 153, 255,1)',
                data: [value.PastSales],
                pointPadding: 0.3,
                pointPlacement: -0.2
            };
        let seriesObjCurrent = {
            name: '2017',
            color: 'rgba(102, 255, 102,.9)',
            data: [value.CurrentSales],
            pointPadding: 0.4,
            pointPlacement: -0.2
        };

        seriesArr.push(seriesObjPast);
        seriesArr.push(seriesObjCurrent);
    });

    return seriesArr;
}

function LoadTotalSales(jsonData) {
    let percentageReached = CalculatePercentageReached(jsonData[0]);

    Highcharts.chart('totalSales', {
        chart: {
            type: 'bar',
            margin: 5,
            height: 150
        },
        title: {
            text: 'Total Sales (Millions $)',
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
            data: [11688288.33],
            pointPadding: 0.3,
            pointPlacement: -0.2
        }, {
            name: '2017',
            color: 'rgba(102, 255, 102,.9)',
            data: [13378112.33],
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

function CalculatePercentageReached(jsonData) {
    let pastYearSales = jsonData.PastTotalSales;
    let currentYearSales = jsonData.CurrentTotalSales;

    return Math.round((currentYearSales / pastYearSales) * 100, -2);
}