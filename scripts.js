// hover effect for the edit button - svg
$(".btn-edit").mouseover(function () {
    $(".path").attr("style", "fill: white");
});

$(".btn-edit").mouseout(function () {
    $(".path").attr("style", "fill: rgb(15.686275%, 65.490198%, 27.058825%)");
});

// right side tabs functionality
$(".tabs-label").click(function () {

    $(".tabs-label").removeClass("active");
    $(this).addClass("active");
    const id = "#" + $(this).attr("for");

    $(".tab-pane").removeClass("active show");
    $(id).addClass("active show");
});
