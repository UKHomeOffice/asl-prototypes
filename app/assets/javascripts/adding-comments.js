function initiateComment(button) {
  var initiateComment = $(button).parent()
  var writeComment = $(button).parent().siblings('.writeComment')
  
  $(initiateComment).toggleClass("hide")
  $(writeComment).toggleClass("hide")
}; 
  
function saveComment(button) {
  var textArea = $(button).prev()
  var writeComment = $(button).parent()
  var initiateComment = $(button).parent().siblings('.initiateComment')
  var addedComment = $(button).parent().siblings('.addedComment')
  var uneditedComment = $('#uneditedComment')
  var commentContent = textArea.val();

  addedComment.find('.comment-content').text(commentContent)
  writeComment.addClass('hide')
  uneditedComment.addClass('hide')
  console.log(uneditedComment)
  addedComment.removeClass('hide')
  initiateComment.toggleClass('hide')
};