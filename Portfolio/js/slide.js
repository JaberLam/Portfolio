$(".slidere ol li").on("click", function() {
    $(this).addClass("act").siblings("li").removeClass("act");
    $(".slidere ul").animate({
        top: -$(".slidere").height() * $(this).index()
    }, 500);
});

// Em An
// 8-2017
// https://codepen.io/collection/AGNJNB/