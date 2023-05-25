$(function () {
  $('#navbar').load('navbar.html')
})

var alerts = []
$(document).ready(function () {
  $('#subscribeButton').click(function () {
    var email = $('#emailInput').val()
    if (!email) {
      var alertHtml =
        '<div  class="alert alert-warning alert-dismissible" role="alert">' +
        'Please fill in email field completed.' +
        '<button type="button" class="close" data-dismiss="alert" onclick="closeAlert(this)">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>'
    } else if (!isValidEmailRegx(email)) {
      var alertHtml =
        '<div  class="alert alert-danger alert-dismissible" role="alert">' +
        'Please enter valid email address and remember that it should have @ and ..' +
        '<button type="button" class="close" data-dismiss="alert" onclick="closeAlert(this)">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>'
    } else {
      var alertHtml =
        '<div  class="alert alert-success alert-dismissible" role="alert">' +
        'This is a success alert that says everthing is ok!.' +
        '<button type="button" class="close" data-dismiss="alert" onclick="closeAlert(this)">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>'
    }
    alerts.push(alertHtml)
    $('#alertContainer').append(alertHtml)
  })

  function closeAlert (button) {
    $(button).parent().alert('close')
    var index = $('.alert').index($(button).parent())
    alerts.splice(index, 1)
  }

  function isValidEmailRegx (email) {
    var emailRegex = /^[^\s@]+@[^\s@\W]+\.[^\s@\W]$/
    return emailRegex.test(email)
  }
})
