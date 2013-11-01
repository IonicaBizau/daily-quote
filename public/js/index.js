$(document).ready(function () {

    $.getJSON("/api/getQuote", function (data) {
        $(".quote").text(data[0].summary);
    });

    if (typeof $API === "undefined") {
        alert("Load this page into Johnny's Webview");
        return;
    }

    $(".close").on("click", $API.closeWindow);

    /* drag */
    var initialPos = {};
    var drag = false;
    $(".drag").on("mousedown", function (e) {
        drag = true;
        initialPos.x = e.pageX;
        initialPos.y = e.pageY;
    }).on("mousemove", function (e) {

        if (!drag) { return; }

        var current = $API.getWindowPosition();
        var winLeft, winTop;

        winLeft = current.left + (e.pageX - initialPos.x);
        winTop  = current.top + (e.pageY- initialPos.y);

        $API.setWindowPosition(winLeft, winTop);
    });

    $("body").on("mouseout mouseup", function () {
        drag = false;
        initial = {};
    });
});
