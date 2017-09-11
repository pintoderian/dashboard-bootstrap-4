(function($) {
  "use strict"; 
  $('[data-toggle="tooltip"]').tooltip();
  $(window).bind("load resize", function() {
        var topOffset = 33;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            topOffset = 100; // 2-row-menu
        }
        $('div.navbar-collapse').removeClass('collapse');
        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#sidebar").css("min-height", (height) + "px");
        }
    });
  $(document).ready(function() {
    $('#dataTable').DataTable();
  });
})(jQuery);
