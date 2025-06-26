window.awe = window.awe || {};
awe.init = function () {
  awe.showPopup();
  awe.hidePopup();
};
$(document).ready(function ($) {
  "use strict";
  awe_backtotop();
  awe_category();
  awe_tab();

  // Cập nhật tất cả các liên kết trong footer để sử dụng anchor (chỉ sử dụng #section thay vì /#section)
  $('.footer a[href^="/#"]').each(function() {
    var href = $(this).attr('href');
    $(this).attr('href', href.replace('/#', '#'));
  });
  
  // Cập nhật liên kết Trang chủ và Tin tức trong footer
  $('.footer a[href="/"]').attr('href', 'index.html');
  $('.footer a[href="/tin-tuc"]').attr('href', 'tin-tuc.html');

  /*Modal gửi yêu cầu đặt phòng*/

  /*Modal gửi yêu cầu đặt phòng*/
  $(document).on("click", ".btn-dichvu", function (e) {
    var ngayden = $(".wrap_form").find(".ngayden").val();
    var ngaydi = $(".wrap_form").find(".ngaydi").val();
    var songuoi = $(".wrap_form").find(".songuoi").val();
    var email = $(".wrap_form").find(".email").val();
    var price = $(".wrap_form").find(".product-price").html();
    var tt = $(".wrap_form").find(".tt_price").html();

    $(".wrap_form .ngayden").val(ngayden);
    $(".wrap_form .ngaydi").val(ngaydi);
    $(".wrap_form .songuoi").attr("value", songuoi);
    $(".wrap_form .email").attr("value", email);
    $(".wrap_form .product-price").attr("value", price);
    $(".wrap_form .tt_price_val").attr("value", tt);
  });
  var dateToday = new Date();
});

$(window).on("load resize", function () {
  resizeImage();
});

function resizeImage() {
  setTimeout(function () {
    $(".item_product_main").each(function () {
      var thumbset = $(this).find(".image_thumb");
      var wthumb = thumbset.width();
      thumbset.css({ height: wthumb + "px" });
    });
  }, 200);
}

$(document).on(
  "click",
  ".overlay, .close-popup, .btn-continue, .fancybox-close",
  function () {
    hidePopup(".awe-popup");
    setTimeout(function () {
      $(".loading").removeClass("loaded-content");
    }, 500);
    return false;
  }
);
function awe_showLoading(selector) {
  var loading = $(".loader").html();
  $(selector).addClass("loading").append(loading);
}
window.awe_showLoading = awe_showLoading;
function awe_hideLoading(selector) {
  $(selector).removeClass("loading");
  $(selector + " .loading-icon").remove();
}
window.awe_hideLoading = awe_hideLoading;
function awe_showPopup(selector) {
  $(selector).addClass("active");
}
window.awe_showPopup = awe_showPopup;
function awe_hidePopup(selector) {
  $(selector).removeClass("active");
}
window.awe_hidePopup = awe_hidePopup;
awe.hidePopup = function (selector) {
  $(selector).removeClass("active");
};
$(document).on(
  "click",
  ".overlay, .close-window, .btn-continue, .fancybox-close",
  function () {
    awe.hidePopup(".awe-popup");
    setTimeout(function () {
      $(".loading").removeClass("loaded-content");
    }, 500);
    return false;
  }
);
var wDWs = $(window).width();
if (wDWs < 1199) {
  /*Remove html mobile*/
  $(".quickview-product").remove();
}
function awe_convertVietnamese(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
    "-"
  );
  str = str.replace(/-+-/g, "-");
  str = str.replace(/^\-+|\-+$/g, "");
  return str;
}
window.awe_convertVietnamese = awe_convertVietnamese;
function awe_category() {
  $(".nav-category .fa-plus").click(function (e) {
    $(this).toggleClass("fa-minus fa-plus");
    $(this).parent().toggleClass("active");
  });
  $(".nav-category .fa-minus").click(function (e) {
    $(this).toggleClass("fa-plus");
    $(this).parent().toggleClass("active");
  });
}
window.awe_category = awe_category;

function awe_backtotop() {
  $(window).scroll(function () {
    $(this).scrollTop() > 200
      ? $(".backtop").addClass("show")
      : $(".backtop").removeClass("show");
  });
  $(".backtop").click(function () {
    return (
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      ),
      !1
    );
  });
}
window.awe_backtotop = awe_backtotop;
function awe_tab() {
  $(".e-tabs:not(.not-dqtab)").each(function () {
    $(this).find(".tabs-title li:first-child").addClass("current");
    $(this).find(".tab-content").first().addClass("current");
    $(this)
      .find(".tabs-title li")
      .click(function (e) {
        var tab_id = $(this).attr("data-tab");
        var url = $(this).attr("data-url");
        $(this).closest(".e-tabs").find(".btn-viewmore a").attr("href", url);
        $(this)
          .closest(".e-tabs")
          .find(".tabs-title li")
          .removeClass("current");
        $(this).closest(".e-tabs").find(".tab-content").removeClass("current");
        $(this).addClass("current");
        $(this)
          .closest(".e-tabs")
          .find("#" + tab_id)
          .addClass("current");
      });
  });
}
window.awe_tab = awe_tab;

$(".dropdown-toggle").click(function () {
  $(this).parent().toggleClass("open");
});
$(".btn-close").click(function () {
  $(this).parents(".dropdown").toggleClass("open");
});
$(document).on("keydown", "#qty, .number-sidebar", function (e) {
  -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) ||
    (/65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey)) ||
    (35 <= e.keyCode && 40 >= e.keyCode) ||
    ((e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) &&
      (96 > e.keyCode || 105 < e.keyCode) &&
      e.preventDefault());
});
$(document).on("click", ".qtyplus", function (e) {
  e.preventDefault();
  fieldName = $(this).attr("data-field");
  var currentVal = parseInt($("input[data-field=" + fieldName + "]").val());
  if (!isNaN(currentVal)) {
    $("input[data-field=" + fieldName + "]").val(currentVal + 1);
  } else {
    $("input[data-field=" + fieldName + "]").val(0);
  }
});
$(document).on("click", ".qtyminus", function (e) {
  e.preventDefault();
  fieldName = $(this).attr("data-field");
  var currentVal = parseInt($("input[data-field=" + fieldName + "]").val());
  if (!isNaN(currentVal) && currentVal > 1) {
    $("input[data-field=" + fieldName + "]").val(currentVal - 1);
  } else {
    $("input[data-field=" + fieldName + "]").val(1);
  }
});
$(".open-filters").click(function (e) {
  e.stopPropagation();
  $(this).toggleClass("openf");
  $(".dqdt-sidebar").toggleClass("openf");
  $(".opacity_menu").toggleClass("open_opacity");
});
$(".menubar_pc").click(function () {
  $(".wrapmenu_full").slideToggle("fast");
  $(".wrapmenu_full, .cloed").toggleClass("open_menu");
  $(".dqdt-sidebar, .open-filters").removeClass("openf");
});

$(".icon-search").click(function (event) {
  $(".search_box_mobile").slideToggle("fast");
});
$(".cloed").click(function () {
  $(this).toggleClass("open_menu");
  $(".wrapmenu_full").slideToggle("fast");
});
$(".opacity_menu").click(function () {
  $(".opacity_menu").removeClass("open_opacity");
});
if ($(".dqdt-sidebar").hasClass("openf")) {
  $(".wrapmenu_full").removeClass("open_menu");
}
$(".ul_collections li > .icon").click(function () {
  $(this).parent().toggleClass("current");
  $(this).toggleClass("icon-plus icon-minus");
  $(this).next("ul").slideToggle("fast");
  $(this).next("div").slideToggle("fast");
});

$(".account_mb > .icon").click(function () {
  $(this).parent().toggleClass("current");
  $(this).toggleClass("icon-plus icon-minus");
  $(this).next("ul").slideToggle("fast");
  $(this).next("div").slideToggle("fast");
});
$(".searchion").mouseover(function () {
  $(".searchmini input").focus();
});
$(".quenmk").on("click", function () {
  $(".h_recover").slideToggle();
});
$('a[data-toggle="collapse"]').click(function (e) {
  if ($(window).width() >= 767) {
    // Should prevent the collapsible and default anchor linking
    // behavior for screen sizes equal or larger than 768px.
    e.preventDefault();
    e.stopPropagation();
  }
});
var wDWs = $(window).width();
if (wDWs < 1199) {
  $(".ul_menu li:has(ul), .item_big li:has(ul)").one("click", function (e) {
    e.preventDefault();
    return false;
  });
}

/********************************************************
# MENU MOBILE
********************************************************/
function awe_menumobile() {
  $(".menu-bar").click(function (e) {
    e.preventDefault();
    $("#nav").toggleClass("open");
  });
  $("#nav .fa").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().toggleClass("open");
  });
}
window.awe_menumobile = awe_menumobile;

$(".menu-bar-h").click(function (e) {
  e.stopPropagation();
  $(".menu_mobile").toggleClass("open_sidebar_menu");
  $(".opacity_menu").toggleClass("open_opacity");
});
$(".header-search").click(function (e) {
  e.stopPropagation();
  $(".header_search").toggleClass("active");
  $(".opacity_menu").toggleClass("open_opacity");
});
$(".close-pop").click(function (e) {
  $(".header_search").removeClass("active");
  $(".opacity_menu").removeClass("open_opacity");
});
$(".opacity_menu").click(function (e) {
  $(".header_search").removeClass("active");
  $(".menu_mobile").removeClass("open_sidebar_menu");
  $(".dqdt-sidebar, .open-filters").removeClass("openf");
  $(".opacity_menu").removeClass("open_opacity");
});
/*Double click go to link menu*/
(function ($, window, document, undefined) {
  $.fn.doubleTapToGo = function (params) {
    if (
      !("ontouchstart" in window) &&
      !navigator.msMaxTouchPoints &&
      !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)
    )
      return false;

    this.each(function () {
      var curItem = false;

      $(this).on("click", function (e) {
        var item = $(this);
        if (item[0] != curItem[0]) {
          e.preventDefault();
          curItem = item;
        }
      });

      $(document).on("click touchstart MSPointerDown", function (e) {
        var resetItem = true,
          parents = $(e.target).parents();

        for (var i = 0; i < parents.length; i++)
          if (parents[i] == curItem[0]) resetItem = false;

        if (resetItem) curItem = false;
      });
    });
    return this;
  };
})(jQuery, window, document);

$(document).ready(function () {
  $(".opacity_menu").click(function (e) {
    $(".wrapmenu_right_2").removeClass("open_sidebar_menu");
    $(".opacity_menu").removeClass("open_opacity");
  });

  var wDW = $(window).width();
  /*Footer*/
  if (wDW > 767) {
    $(".toggle-mn").show();
  } else {
    $(".footer-click > .clicked").click(function () {
      $(this).toggleClass("open_");
      $(this).next("ul").slideToggle("fast");
      $(this).next("div").slideToggle("fast");
    });
  }
});

$(document).ready(function () {
  $(".btn-wrap").click(function (e) {
    $(this).parent().slideToggle("fast");
  });

  /*fix menu sub*/
  jQuery("#nav li.level0 li")
    .mouseover(function () {
      if (jQuery(window).width() >= 740) {
        jQuery(this).children("ul").css({ top: 0, left: "158px" });
        var offset = jQuery(this).offset();
        if (offset && jQuery(window).width() < offset.left + 300) {
          jQuery(this).children("ul").removeClass("right-sub");
          jQuery(this).children("ul").addClass("left-sub");
          jQuery(this).children("ul").css({ top: 0, left: "-158px" });
        } else {
          jQuery(this).children("ul").removeClass("left-sub");
          jQuery(this).children("ul").addClass("right-sub");
        }
        jQuery(this).children("ul").fadeIn(100);
      }
    })
    .mouseleave(function () {
      if (jQuery(window).width() >= 740) {
        jQuery(this).children("ul").fadeOut(100);
      }
    });
});

/*Modal thông báo thành công*/
$(document).ready(function () {
  $("#closed_dichvu").on("click", function (e) {
    e.preventDefault();
    $(".modal_dichvu").hide();
  });
  var test = $(".guilienhe_thanhcong").text();
  if (test != "") {
    $("#datlich_thanhcong").modal();
  }
});

/*End Modal thông báo thành công*/

/*Js datepicker tình trạng đặt phòng */
$(function () {
  if ($(".line-item-property__field").attr("data-date")) {
    var datadate = $(this)
      .find(".line-item-property__field")
      .attr("data-date")
      .replace(/\n/gi, "")
      .split(",");
    var disableddates = datadate;
    function DisableSpecificDates(date) {
      var string = jQuery.datepicker.formatDate("dd-mm-yy", date);
      return [disableddates.indexOf(string) == -1];
    }
  } else {
    var disableddates = false;
  }
  var dateToday = new Date();
  $(".line-item-property__field").datepicker({
    defaultDate: "",
    setDate: dateToday,
    numberOfMonths: 3,
    minDate: 0,
    beforeShowDay: DisableSpecificDates,
  });
});

/*JS TÌNH TRẠNG ĐẶT PHÒNG*/
var date_slide = new Date();
function customRangeStartDate(input) {
  if (input.id == "EndDate") {
    return {
      minDate: $("#StartDate").datepicker("getDate"),
      maxDate: null,
    };
  } else {
    return {
      minDate: date_slide,
      maxDate: $("#EndDate").datepicker("getDate"),
    };
  }
}
$(function () {
  $("#StartDate, #EndDate").datepicker({
    defaultDate: date_slide,
    setDate: date_slide,
    minDate: date_slide,
    dateFormat: "dd/mm/yy",
    beforeShow: customRangeStartDate,
  });
});
$(window).on("load resize", function () {
  var wDW = $(window).width();
  if (wDW > 1200) {
    var mn = $("header");
    var fix = $(".modal_request_room");
    fixstic = "fixstic";
    mns = "sticky";
    hdr = $("header").height();
    $(window).scroll(function () {
      if ($(this).scrollTop() > hdr) {
        mn.addClass(mns);
        fix.addClass(fixstic);
      } else {
        mn.removeClass(mns);
        fix.removeClass(fixstic);
      }
    });
  }
});

// fix menu
$(".item_big li a").click(function (e) {
  $(".item_big li").removeClass("active");
  $(this).parent().addClass("active");
});

//animation scroll js
$('a[href*="#"]:not([href="#"])').on("click", function () {
  if (
    location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
    location.hostname === this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top - 150,
        },
        400
      );
      return false;
    }
  }
});
