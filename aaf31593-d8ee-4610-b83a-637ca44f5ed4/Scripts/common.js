let ajaxSettings = {
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    timeout: 300000, //five minutes
    converters: {
        'text json': function (jsonString) {
            let obj = jQuery.parseJSON(jsonString);
            if (obj && obj.hasOwnProperty("d")) obj = obj.d;
            return obj;
        }
    },
    error: AlertError
}
function SetUpAJAX() {
    $.ajaxSetup(ajaxSettings);
}

function AlertError(xhr, textStatus, errorThrown) {
    let ex = $.parseJSON(xhr.responseText);
    let errorText = {
        Text: `${ex.Message}: ${ex.ExceptionMessage}`
    };
    LoadPartial('partials/error.html', errorText, '.alerts').
        then(() => {
            $(".loading").hide();
            setTimeout(() => $('.alert').fadeTo(500, 0).slideUp(500, function () { $(this).remove(); }), 10000);
        });
}

function AlertSuccess(successText) {
    let text = {
        Text: successText
    };
    LoadPartial('partials/success.html', text, '.alerts').
        then(() => {
            setTimeout(() => $('.alert').fadeTo(500, 0).slideUp(500, function () { $(this).remove(); }), 2000);
        });
}

function BeginLoading() {
    LoadPartial('partials/loading.html', '', '.content');
}

function CloseAllPopups(e) {
    $('[data-toggle="popover"],[data-original-title]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false;
        }

    });
}

function ParseCSV(csvText) {
    let strDelimiter = ',';
    var objPattern = new RegExp(
        ("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
        "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");

    var arrData = [[]];
    var arrMatches = null;
    while (arrMatches = objPattern.exec(csvText)) {
        var strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            arrData.push([]);
        }
        if (arrMatches[2]) {
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            var strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
}

/*********************************************************/
/*                    HANDLEBARS CODE                    */
/*********************************************************/

function LoadPartial(inPartial, data, target) {

    return new Promise((resolve, reject) => {
        // Get the partial
        $.get(inPartial)
          .done(function (partial_data) {

              // Render the partial using the data into the target
              let compiled_template = Handlebars.compile(partial_data);
              let html = compiled_template(data);
              $(target).html(html);
              resolve();
          })
          .fail(function (xhr, a, b) {
              reject("Failed to get partial template from url " + inPartial);
          });
    });
}

function FormatDate(date) {
    let m = moment(date);
    let formattedDate = m.isValid() ? m.format('MM/DD/YYYY') : '-';

    return formattedDate;
}

function FormatDateTime(date) {
    let m = moment(date);
    let formattedDate = m.isValid() ? m.format('MM/DD/YYYY hh:mm:ss a') : '-';

    return formattedDate;
}

function InitializeHandlebars(partials_url, home_url, navbar_url) {

    Handlebars.logger.level = 0;

    Handlebars.registerHelper('iso-local-date-time', function (text) {
        text = Handlebars.escapeExpression(text);
        if ($.type(text) === "string") {
            let m = moment(text);
            text = m.format("YYYY/MM/DD hh:mm:ss a");
        }
        else {
            console.log("iso-local-date-time: object is not a string.");
            console.log(text);
            text = "";
        }
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('current-date-time', function () {
        let m = moment();
        text = m.format("YYYY/MM/DD hh:mm:ss a");
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('format-date', function (date) {
        return FormatDate(date);
    });

    Handlebars.registerHelper('format-currency', function (value) {
        return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    });

    Handlebars.registerHelper('format-datetime', function (date) {
        return FormatDateTime(date);
    });

    Handlebars.registerHelper('format-boolean', function (boolean) {
        let b = Boolean(boolean);
        return (b ? "Yes" : "No")
    });

    Handlebars.registerHelper('round', function (number, numberOfPlaces) {
        let text = "";
        try {
            number = Handlebars.escapeExpression(number);
            text = parseFloat(number).toFixed(numberOfPlaces).toLocaleString();
        } catch (err) {
            console.log("Failed to convert number to integer " + err);
        }

        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('make-integer', function (number) {

        let text = "";
        try {
            number = Handlebars.escapeExpression(number);
            text = parseInt(number).toLocaleString();
        } catch (err) {
            console.log("Failed to convert number to integer " + err);
        }

        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('greater-than', function (current_value, test_value, options) {
        if (current_value > test_value) {
            return options.fn(this);
        }
        return options.inverse(this);

    });
}