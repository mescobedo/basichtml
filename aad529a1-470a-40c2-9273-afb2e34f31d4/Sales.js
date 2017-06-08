$(function () {
    LoadSalesScreen();
})

function LoadSalesScreen()
{
    $('#divOutput').html("<div  class='container-fluid container2' style='margin-left:auto; margin-right:auto; text-align:center'>" + LoadTotalSales() + "</div>" + LoadSalesDDL() + "<div id='divSalesData'></div> <div class='modal'></div>");
    $("#ddlSales").on('change', LoadSalesData);

    $('#divSalesData').html(LoadCustomer());
    $('#customerTable').dataTable();
    $('.moreCust').off('click').on('click', LoadMore);
}

function LoadTotalSales()
{
    var str = "";
    
    str += "<h3>Sales Comparison</h3>";

    str += "<table id='tbltot' class='data' style='width:40%'>";

   // str += "<tr><th colspan='3'>Sales Comparison</th></tr>"
    str += "<tr><th>2017</th><th>2016</th><th>Difference</th></tr>";
    str += "<tr><td>$10,133,333</td><td>$11,688,288</td><td>($555,155)</td></tr>"

    str += "</table>"
    str += "<hr style='padding:0px' />"
    return str;
}

function LoadSalesDDL()
{
    var str = "";
    str += "<div style=' text-align:left'>"
    str += "View by: <select id='ddlSales' >" +
        "<option value='customer'>By Customer</option>" +
        "<option value='vendor'>By Vendor</option>" +
        "<option value='item'>By Item</option>" +
        "</select><br /><br /></div>";
    return str;
}

function LoadSalesData(e)
{
    var selectedOption = $("#ddlSales").val();
    if (selectedOption == "customer")
    {
        $('#divSalesData').html(LoadCustomer());
        $('#customerTable').dataTable();
        $('.moreCust').off('click').on('click', LoadMore);
    }
    else if(selectedOption == "vendor")
    {
        $('#divSalesData').html(LoadVendor());
        $('#vendorTable').dataTable(); 
        $('.moreVend').off('click').on('click', LoadMoreVendor);
    }
    else if(selectedOption == "item")
    {
        $('#divSalesData').html(LoadItem());
        $('#itemTable').dataTable();
    }
}

function LoadCustomer()
{
    var string = "";

    string += "<table id='customerTable' class='data'>"

    string += "<thead><tr><th>Customer Number</th>" +
        "<th>Customer Name</th>" + 
        "<th>This Year Sales</th>" +
        "<th>Last Year Sales</th>" +
        "<th>Difference</th>" +
        "<th>More Info</th>" +
          "</tr></thead>"

    string += "<tbody>"

    string += "<tr><td>2</td><td>Alamo Cafe</td><td>$99,508</td><td>$88,558</td><td>$450</td><td><input type='button' class='moreCust' value='>>' id='2-Alamo Cafe' /></td></tr>"
    string += "<tr><td>59</td><td>TAQUERIAS ARANDAS ACCOUNTS</td><td>$65,329</td><td>$77,779</td><td>($11,650)</td><td><input type='button' class='moreCust' value='>>' id='59-TAQUERIAS ARANDAS ACCOUNTS' /></td></tr>"

    string += "</tbody>"
    string += "<tfoot><tr><td colspan='2'><b>Totals:</b></td><td><b>$10,133,333</b></td><td><b>$11,688,288</b></td><td><b>($555,155)</b></td><td></td></tr></tfoot>"
    string += "</table>"
    return string;

}

function LoadVendor() {
    var string = "";

    string += "<table id='vendorTable' class='data'>"

    string += "<thead><tr><th>Vendor Number</th>" +
        "<th>Vendor Name</th>" +
        "<th>This Year Sales</th>" +
        "<th>Last Year Sales</th>" +
        "<th>Difference</th>" +
        "<th>More Info</th>" +
          "</tr></thead>"

    string += "<tbody>"

    string += "<tr><td>100463</td><td>BASIC AMERICAN FOODS</td><td>$49,460</td><td>$69,292</td><td>($19,832)</td><td><input type='button' class='moreVend'  value='>>' id='100465-BASIC AMERICAN FOODS' /></td></tr>"
    string += "<tr><td>105333</td><td>TYSON FOODS, INC.</td><td>$1,634,735</td><td>$1,694,442</td><td>($59,707)</td><td><input type='button' class='moreVend' value='>>' id='105333-TYSON FOODS, INC.' /></td></tr>"
    string += "<tr><td>105333</td><td>TYSON FOODS, INC.</td><td>$1,634,735</td><td>$1,694,442</td><td>($59,707)</td><td><input type='button' class='moreVend' value='>>' id='105333-TYSON FOODS, INC.' /></td></tr>"
    string += "<tr><td>105333</td><td>TYSON FOODS, INC.</td><td>$1,634,735</td><td>$1,694,442</td><td>($59,707)</td><td><input type='button' class='moreVend' value='>>' id='105333-TYSON FOODS, INC.' /></td></tr>"
    string += "<tr><td>105333</td><td>TYSON FOODS, INC.</td><td>$1,634,735</td><td>$1,694,442</td><td>($59,707)</td><td><input type='button' class='moreVend' value='>>' id='105333-TYSON FOODS, INC.' /></td></tr>"

    string += "</tbody>"
    string += "<tfoot><tr><td colspan='2'><b>Totals:</b></td><td><b>$10,133,333</b></td><td><b>$11,688,288</b></td><td><b>($555,155)</b></td><td></td></tr></tfoot>"
    string += "</table>"

    return string;

}

function LoadItem() {
    var string = "";

    string += "<table id='itemTable' class='data'>"

    string += "<thead><tr><th>Item Number</th>" +
        "<th>Item Description</th>" +
        "<th>Vendor</th>" +
        "<th>This Year Sales</th>" +
        "<th>Last Year Sales</th>" +
        "<th>Difference</th>" +
          "</tr></thead>"

    string += "<tbody>"

    string += "<tr><td>11414</td><td>CHICK, TNDR HMSTYL BRD RAW</td><td>105333 - TYSON FOODS, INC.</td><td>$261</td><td>$2,665</td><td>($2,404)</td></tr>"
    string += "<tr><td>14404</td><td>CATFISH FILLET 5-7OZ CHINA</td><td>234250 - HOUSTON SEAFOOD</td><td>$3,150</td><td>$337</td><td>$2,813</td></tr>"
    string += "<tfoot><tr><td colspan='3'><b>Totals:</b></td><td><b>$10,133,333</b></td><td><b>$11,688,288</b></td><td><b>($555,155)</b></td></tr></tfoot>"

    string += "</tbody>"
    string += "</table>"
    return string;

}


function LoadMore(e) {
    var str = "";
    str += "<div class='modal' role='dialog'>";
    str += "<div class='modal-dialog'>";
    str += "<div class='modal-content'>";
    str += " <div class='modal-header'>";
    str += "   <button type='button' class='close' data-dismiss='modal'>&times;</button>";
    str += "  <h4 class='modal-title'>Sales Detail for Customer:  " + e.target.id + "</h4>";
    str += "  </div>";
    str += "  <div class='modal-body' style='font-size: 9pt'>";
    str += "    <table class='tblDetails data'>";
    str += "      <tr>";
    str += "        <th>Vendor</th>";
    str += "  <th>This Year</th><th>Last Year</th><th>Difference</th>";
    str += " </tr>";

    str += " <tr>";
    str += " <td>Vendor 1</td><td>$500</td><td>$400</td><td>$100</td>";
    str += "</tr>";
    str += " <tr>";
    str += " <td>Vendor 2</td><td>$500</td><td>$400</td><td>$100</td>";
    str += "</tr>";
    str += " <tr>";
    str += " <td>Vendor 3</td><td>$400</td><td>$500</td><td>($100)</td>";
    str += "</tr>";
   
    str += "<tr><td><b>Totals:</b></td><td><b>$1,400</b></td><td><b>$1,300</b></td><td><b>$100</b></td></tr>"
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

function LoadMoreVendor(e) {
    var str = "";
    str += "<div class='modal' role='dialog'>";
    str += "<div class='modal-dialog'>";
    str += "<div class='modal-content'>";
    str += " <div class='modal-header'>";
    str += "   <button type='button' class='close' data-dismiss='modal'>&times;</button>";
    str += "  <h4 class='modal-title'>Sales Detail for Vendor:  " + e.target.id + "</h4>";
    str += "  </div>";
    str += "  <div class='modal-body' style='font-size: 9pt'>";
    str += "    <table class='tblDetails data'>";
    str += "      <tr>";
    str += "        <th>Customer</th>";
    str += "  <th>This Year</th><th>Last Year</th><th>Difference</th>";
    str += " </tr>";

    str += " <tr>";
    str += " <td>Customer 1</td><td>$500</td><td>$400</td><td>$100</td>";
    str += "</tr>";
    str += " <tr>";
    str += " <td>Customer 2</td><td>$500</td><td>$400</td><td>$100</td>";
    str += "</tr>";
    str += " <tr>";
    str += " <td>Customer 3</td><td>$400</td><td>$500</td><td>($100)</td>";
    str += "</tr>";

    str += "<tr><td><b>Totals:</b></td><td><b>$1,400</b></td><td><b>$1,300</b></td><td><b>$100</b></td></tr>"

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