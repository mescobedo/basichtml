function LoadAttendanceScreen() {
    $('#divOutput').html("<div  class='container-fluid container2' style='margin-left:auto; margin-right:auto; text-align:center'>" + LoadTotalAttendance() + "</div>" + LoadAttendanceDDL() + "<div id='divAttendanceData'></div><div class='modal'></div>");
    LoadAttendanceData();
    $("#ddlSales").on('change', LoadAttendanceDDLChange);
}


function LoadAttendanceData() {
    $('#divAttendanceData').html(LoadVendorAttendance());
    $('#vendorTableAttend').dataTable();
    $('.moreVend').off('click').on('click', LoadMoreAttendance);

}

function LoadAttendanceDataCustomer() {
    $('#divAttendanceData').html(LoadCustomerAttendance());
    $('#customerTableAttend').dataTable();
    $('.moreCust').off('click').on('click', LoadMoreAttendanceCustomer);

}
function LoadAttendanceDDL() {
    var str = "";
    str += "<div style=' text-align:left'>"
    str += "View by: <select id='ddlSales' >" +
        "<option value='vendor'>By Vendor</option>" +
        "<option value='customer'>By Customer</option>" +
        "</select><br /><br /></div>";
    return str;
}

function LoadAttendanceDDLChange(e) {
    var selectedOption = $("#ddlSales").val();
    if (selectedOption == "customer") {
        LoadAttendanceDataCustomer();
    }
    else if (selectedOption == "vendor") {
        LoadAttendanceData();
    }
}

function LoadTotalAttendance() {
    var str = "";

    str += "<h3>Attendance Comparison</h3>";

    str += "<table id='tbltot' class='data' style='width:20%'>";

    str += "<tr><th>2017</th><th>2016</th><th>Difference</th></tr>";
    str += "<tr><td>36</td><td>36</td><td>0</td></tr>"

    str += "</table>"
    str += "<hr style='padding:0px' />"
    return str;
}

function LoadVendorAttendance() {
    var string = "";

    string += "<table id='vendorTableAttend' class='data'>"

    string += "<thead><tr><th>Vendor Number</th>" +
        "<th>Vendor Name</th>" +
        "<th>This Year Attendance</th>" +
        "<th>Last Year Attendance</th>" +
        "<th>Difference</th>" +
        "<th>More Info</th>" +
          "</tr></thead>"

    string += "<tbody>"

    string += "<tr><td>100463</td><td>BASIC AMERICAN FOODS</td><td>4</td><td>1</td><td>3</td><td><input type='button' class='moreVend' value='>>' id='100465-BASIC AMERICAN FOODS' /></td></tr>"
    string += "<tr><td>105333</td><td>TYSON FOODS, INC.</td><td>27</td><td>3</td><td>24</td><td><input type='button' class='moreVend'  value='>>' id='105333-TYSON FOODS, INC.'  /></td></tr>"

    string += "</tbody>"
    string += "</table>"
    return string;


}

function LoadCustomerAttendance() {
    var string = "";

    string += "<table id='customerTableAttend' class='data'>"

    string += "<thead><tr><th>Customer Number</th>" +
        "<th>Customer Name</th>" +
        "<th>This Year Attendance</th>" +
        "<th>Last Year Attendance</th>" +
        "<th>More Info</th>" +
          "</tr></thead>"

    string += "<tbody>"
    string += "<tr><td>2</td><td>Alamo Cafe</td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td><td></td><td><input type='button' class='moreCust' value='>>' id='2-Alamo Cafe' /></td></tr>"
    string += "<tr><td>59</td><td>TAQUERIAS ARANDAS ACCOUNTS</td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td><td><input type='button' class='moreCust' value='>>' id='59-TAQUERIAS ARANDAS ACCOUNTS' /></td></tr>"

    string += "</tbody>"
    string += "<tfoot><tr><td colspan='2'><b>Total Customers:</b></td><td><b>36</b></td><td><b>36</b></td><td></td></tr></tfoot>"
    string += "</table>"
    return string;


}

function LoadMoreAttendance(e) {
    var str = "";
    str += "<div class='modal' role='dialog'>";
    str += "<div class='modal-dialog'>";
    str += "<div class='modal-content'>";
    str += " <div class='modal-header'>";
    str += "   <button type='button' class='close' data-dismiss='modal'>&times;</button>";
    str += "  <h4 class='modal-title'>Attendance Detail for Vendor:  " + e.target.id + "</h4>";
    str += "  </div>";
    str += "  <div class='modal-body' style='font-size: 9pt'>";
    str += "    <table class='tblDetails data'>";
    str += "      <tr>";
    str += "        <th>Customer</th>";
    str += "  <th>This Year</th><th>Last Year</th>";
    str += " </tr>";

    str += " <tr>";
    str += " <td>Customer 1</td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td>";
    str += "</tr>";
    str += " <tr>";
    str += " <td>Customer 2</td><td></td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td>";
    str += "</tr>";
    str += " <tr>";
    str += " <td>Customer 3</td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td><td></td></td>";
    str += "</tr>";

    str += "<tr><td><b>Totals:</b></td><td><b>2</b></td><td><b>2</b></td>></tr>"
    str += "</table>";
    str += "</div>";
    str += "<div class='modal-footer'>";

    str += "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
    str += "<br>";
    str += "</div>";
    str += "</div>";
    str += "";
    str += "</div>";
    str += "</div>";

    $('.modal').html(str);
    $('.modal').modal('show');
}

function LoadMoreAttendanceCustomer(e) {
    var str = "";
    str += "<div class='modal' role='dialog'>";
    str += "<div class='modal-dialog'>";
    str += "<div class='modal-content'>";
    str += " <div class='modal-header'>";
    str += "   <button type='button' class='close' data-dismiss='modal'>&times;</button>";
    str += "  <h4 class='modal-title'>Attendance Detail for Customer:  " + e.target.id + "</h4>";
    str += "  </div>";
    str += "  <div class='modal-body' style='font-size: 9pt'>";
    str += "    <table class='tblDetails data'>";
    str += "      <tr>";
    str += "        <th>Vendor</th>";
    str += "  <th>This Year</th><th>Last Year</th>";
    str += " </tr>";

    str += " <tr>";
    str += " <td>Vendor 1</td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td>";
    str += "</tr>";
    str += " <tr>";
    str += " <td>Vendor 2</td><td></td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td>";
    str += "</tr>";
    str += " <tr>";
    str += " <td>Vendor 3</td><td><a class='breadcrumb-link' style='cursor: pointer; padding-right: 10px'><span class='glyphicon glyphicon-ok'></span></a></td><td></td></td>";
    str += "</tr>";

    str += "<tr><td><b>Totals:</b></td><td><b>2</b></td><td><b>2</b></td>></tr>"
    str += "</table>";
    str += "</div>";
    str += "<div class='modal-footer'>";

    str += "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
    str += "<br>";
    str += "</div>";
    str += "</div>";
    str += "";
    str += "</div>";
    str += "</div>";

    $('.modal').html(str);
    $('.modal').modal('show');
}
