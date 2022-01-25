function initiateComment(button) {
  var initiateComment = $(button).parent()
  var writeComment = $(button).parent().siblings('.writeComment')
  
  $(initiateComment).toggleClass("hide")
  $(writeComment).toggleClass("hide")
}; 
  
function saveComment(button) {
  var textArea = $(button).prev()
  console.log(textArea)
  var writeComment = $(button).parent()
  var initiateComment = $(button).parent().siblings('.initiateComment')
  var addedComment = $(button).parent().siblings('.addedComment')
  var commentContent = textArea.val();

  console.log(commentContent)
  addedComment.find('.comment-content').text(commentContent)
  writeComment.addClass('hide')
  addedComment.removeClass('hide')
  initiateComment.toggleClass('hide')
};