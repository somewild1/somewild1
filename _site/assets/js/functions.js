$(document).ready(function () {
  if (!$('.posts').length) {
    $('#blog-link').attr("href", "/#open");
  } else {
    var url = window.location.href;
    if (url.indexOf("#open") == -1) {
      toggle_blog();
    };
  }

});

function toggle_blog() {
  $("body").toggleClass("blog-closed");
};
