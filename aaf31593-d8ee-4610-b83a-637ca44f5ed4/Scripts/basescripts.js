$(function () {
    // Page configuration
    InitializeHandlebars();

    BeginLoading();
    LoadMain();
});

function LoadMain() {
    $.getJSON('data/sales.json', (data) => {
        LoadPartial('partials/overall.html', data, '.rightSidebar').then(() => { });
    })
    LoadPartial('partials/navbar.html', {}, '.navbar').then(() => {
        $('#navVendorButton').click();
    });
}

function VendorClicked(e) {
    $('#navItemButton').removeClass('active');
    $('#navCustomerButton').removeClass('active');

    $('#navVendorButton').addClass('active');

    LoadPartial('partials/vendors.html', {}, '.content').then(() => {
        $('#navVendorsSalesButton').click();
    });
}

function VendorsSalesClicked(e) {
    $('#navVendorsAttendanceButton').removeClass('active');
    $('#navVendorsSalesButton').addClass('active');

    $.getJSON('data/vendors.json', (data) => {
        LoadPartial('partials/vendorssales.html', data, '.vendorsInformation').then(() => {
            $('#allVendorsSalesTables').DataTable({});
        });
    });
}

function VendorsAttendanceClicked(e) {
    $('#navVendorsSalesButton').removeClass('active');
    $('#navVendorsAttendanceButton').addClass('active');

    $.getJSON('data/vendors.json', (data) => {
        LoadPartial('partials/vendorscustomerattendance.html', data, '.vendorsInformation').then(() => {
            $('#allVendorsAttendanceTable').DataTable({});
        });
    });
}

function CustomerClicked(e) {
    $('#navVendorButton').removeClass('active');
    $('#navItemButton').removeClass('active');

    $('#navCustomerButton').addClass('active');

    LoadPartial('partials/customers.html', {}, '.content').then(() => {
        $('#navCustomersSalesButton').click();
    });
}

function CustomersSalesClicked(e) {
    $('#navCustomersAttendanceButton').removeClass('active');
    $('#navCustomersSalesButton').addClass('active');

    $.getJSON('data/customers.json', (data) => {
        LoadPartial('partials/customersssales.html', data, '.customersInformation').then(() => {
            $('#allCustomersSalesTables').DataTable({});
        });
    });
}

function CustomersAttendanceClicked(e) {
    $('#navCustomersSalesButton').removeClass('active');
    $('#navCustomersAttendanceButton').addClass('active');

    $.getJSON('data/customers.json', (data) => {
        LoadPartial('partials/customersattendance.html', data, '.customersInformation').then(() => {
            $('#allCustomersAttendanceTable').DataTable({});
        });
    });
}

function ItemClicked(e) {
    $('#navVendorButton').removeClass('active');
    $('#navCustomerButton').removeClass('active');

    $('#navItemButton').addClass('active');

    LoadPartial('partials/items.html', {}, '.content').then(() => {
        $.getJSON('data/items.json', (data) => {
            LoadPartial('partials/itemssales.html', data, '.itemsSales').then(() => {
                $('#allItemsSalesTables').DataTable({});
            });
        });
    });
}