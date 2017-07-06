$(document).ready(function() {
  $('#comments_submit_btn_js').click(function() {
      if ($.trim($("#Text_area_input").val())) {
        console.log($.trim($("#Text_area_input").val()));
        // textarea is empty or contains only white-space
        var commentValue = $('#Text_area_input').val();
        var hiddenDiv = $('.row.hidden.comments');
        console.log(commentValue);
        var newComment = hiddenDiv.clone();
        console.log(newComment);
        hiddenDiv.before(newComment)
        newComment.removeClass("hidden");
        newComment.find('textarea').val(commentValue);
        $("#Text_area_input").val(" ");
      }
      });

});
