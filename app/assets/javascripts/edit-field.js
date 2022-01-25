function initiateEdit(button) {
  var initiateEdit = $(button).parent()
  var writeEdit = $(button).parent().siblings('.writeEdit')
  
  $(initiateEdit).toggleClass("hide")
  $(writeEdit).toggleClass("hide")
  $('#insp-refusal-reason').toggleClass('hide')
}; 
  
function saveEdit(button) {
  var textArea = $(button).prev()
  console.log(textArea)
  var writeEdit = $(button).parent()
  var initiateEdit = $(button).parent().siblings('.initiateEdit')
  var addedEdit = $(button).parent().siblings('.addedEdit')
  var EditContent = textArea.val();

  addedEdit.find('.Edit-content').text(EditContent)
  writeEdit.addClass('hide')
  addedEdit.removeClass('hide')
  initiateEdit.toggleClass('hide')
};