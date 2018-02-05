$(document).ready(function(){
    var navContainer = document.getElementById("nav-container");
    var navBox = document.getElementById("nav-box");
    var text = document.getElementById("text");
    var navBoxChild = navBox.children;
    var textChild = text.children;
    var num = navContainer.offsetTop;
    var a = navContainer.offsetHeight;
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop >= num){
            navContainer.className = "nav fixed";
            text.style.paddingTop = a +"px";
            navBox.style.background = "#e6e6e6"

        }else{
            navContainer.className = "nav";
            text.style.paddingTop = "";

        }
    };

    //******************
    $(".arrowheadDiv2 span ").click(function () {
        var index = $(this).index();
        $(".arrowhead-ul li").eq(index).removeClass('hide').siblings().addClass('hide')
    });
    // $(".col-lg-3").mousemove(function () {
    //     var index = $(this).index();
    //     $(".arrowhead-div3 div").eq(index).removeClass('hide').siblings().addClass('hide')
    // })
    $(".arrowhead-div2 span ").click(function () {
        var index = $(this).index();
        $(".arrowheadUl li").eq(index).removeClass('hide').siblings().addClass('hide')
    });
    $(".arrowhead-div5 span ").click(function () {
        var index = $(this).index();
        $(".arrowheadUl2 li").eq(index).removeClass('hide').siblings().addClass('hide')
    });
    $(".arrowhead-div6 span ").click(function () {
        var index = $(this).index();
        $(".arrowheadUl2-1 li").eq(index).removeClass('hide').siblings().addClass('hide')
    });
    $(".arrowhead-div4 span ").click(function () {
        var index = $(this).index();
        $(".arrowheadUl3 li").eq(index).removeClass('hide').siblings().addClass('hide')
    });
    $(".prices").click(function () {
        $(".province").removeClass('hide').siblings().addClass('hide')
    });
    $(".prices1").click(function () {
        $(".province1").removeClass('hide').siblings().addClass('hide')
    })
    $(".one").mousemove(function () {
        $(".one-1 ").addClass('hide')
        $(".one-2").removeClass('hide')
    })
    $(".one").mouseout(function () {
        $(".one-1 ").removeClass('hide')
        $(".one-2").addClass('hide')
    })
    $(".two").mousemove(function () {
        $(".two-1 ").addClass('hide')
        $(".two-2").removeClass('hide')
    })
    $(".two").mouseout(function () {
        $(".two-1 ").removeClass('hide')
        $(".two-2").addClass('hide')
    })
    $(".three").mousemove(function () {
        $(".three-1 ").addClass('hide')
        $(".three-2").removeClass('hide')
    })
    $(".three").mouseout(function () {
        $(".three-1 ").removeClass('hide')
        $(".three-2").addClass('hide')
    })
    $(".four").mousemove(function () {
        $(".four-1 ").addClass('hide')
        $(".four-2").removeClass('hide')
    })
    $(".four").mouseout(function () {
        $(".four-1 ").removeClass('hide')
        $(".four-2").addClass('hide')
    })




});
