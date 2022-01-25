function editCondition(button) {
  var editButtons = $(button).parent()
  var saveButtons = $(button).parent().next()
  var conditionRead = $(button).parent().prev().prev()
  var conditionEdit = $(button).parent().prev()
  var conditionContent = conditionRead.find('.cond-content').text()

  conditionRead.toggleClass('hide')
  conditionEdit.find('textarea').text(conditionContent)
  conditionEdit.toggleClass('hide')
  editButtons.toggleClass('hide')
  saveButtons.toggleClass('hide')
}

function saveCondition(button) {
  var saveButtons = $(button).parent()
  var editButtons = $(button).parent().prev()
  var conditionRead = $(button).parent().prev().prev().prev()
  var conditionEdit = $(button).parent().prev().prev()
  var conditionEditedContent = conditionEdit.find('textarea').val()

  conditionRead.find('.cond-content').html('<p>'+conditionEditedContent+'</p>')
  conditionRead.toggleClass('hide')
  conditionRead.find('.govuk-warning-text').addClass('hide')
  conditionEdit.toggleClass('hide')
  editButtons.toggleClass('hide')
  saveButtons.toggleClass('hide')
  console.log(conditionEditedContent)
}