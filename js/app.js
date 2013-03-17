var app = app || {};
var ENTER_KEY = 13;
$(function () {
    $.ajaxPrefilter(function (options, originalOptions, xhr) {
        if (appConfig.backendID) {
            xhr.setRequestHeader('Enginio-Backend-Id', appConfig.backendID);
        }

        if (appConfig.backendSecret) {
            xhr.setRequestHeader('Enginio-Backend-Secret', appConfig.backendSecret);
        }

        xhr.setRequestHeader('Content-Type', 'application/json');
    });


    $(document).ajaxError(function (exception, jqXHR, options) {
        if (jqXHR.status === 0) {
            alert('No network connectivity.');
        } else if (exception === 'timeout') {
            alert('Request timed out.');
        } else if (exception === 'abort') {
            alert('Ajax request aborted.');
        } else {
            alert('HTTP status code:' + jqXHR.status + '\n Error info:' + jqXHR.responseText);
        }
    });

    app.Todos.url = appConfig.backendApiUrl + "/v1/objects/todos";

    new app.AppView();
});

