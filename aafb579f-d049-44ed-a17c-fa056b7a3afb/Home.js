$(document).ready(function () {
    initializePage();
    // let totalSalesJson = $.getJSON('../TotalSales.json', function (data) {
    //     LoadTotalSales(data);
    // });
});

function initializePage() {
    $(".salestabnav").click(showSales);
    $(".attendancetabnav").click(showAttendance);
};

function showSales() {
    $(".mainDivSales").removeClass("hidden")
    $(".mainDivAttendance").addClass("hidden")
}

function showAttendance() {
    $(".mainDivSales").addClass("hidden")
    $(".mainDivAttendance").removeClass("hidden")
}