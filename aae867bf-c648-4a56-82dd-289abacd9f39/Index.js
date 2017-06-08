function showCustomers()
{
    $('#vendorTable').hide();
    $('#itemTable').hide();
    $('#divContent').hide();
    $('#customerTable').show();
}

function showVendors() {
    $('#customerTable').hide();
    $('#itemTable').hide();
    $('#divContent').hide();
    $('#vendorTable').show();    
}

function showItems() {
    $('#vendorTable').hide();
    $('#divContent').hide();
    $('#customerTable').hide();
    $('#itemTable').show();
}

function showDashboard() {
    $('#vendorTable').hide();
    $('#customerTable').hide();
    $('#itemTable').hide();
    $('#divContent').show();
}

$(document).ready(function () {
    "use strict";

    $('body').on('click', '#btnViewCustomers', showCustomers);
    $('body').on('click', '#btnViewVendors', showVendors);
    $('body').on('click', '#btnViewItems', showItems);
    $('body').on('click', 'button.backToDashboard', showDashboard);
});