var buttonClicked;

$('.btn-buy').click(function(event){
  buttonClicked = event.target;
  var movieName = $(event.target).parent().parent().find('.movie-name').text();
  $('#buy-ticket-modal .modal-header').html('<h5>Buy ' + movieName + ' Ticket</h5>');
});


$('#buy-ticket-btn').click(function(event) {
  var user = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    phone: $('#phone').val()
  };
  console.log(user);

  var newTicketLeft = $(buttonClicked).parent().prev().text() - 1;
  if (newTicketLeft >= 0) {
    $(buttonClicked).parent().prev().text(newTicketLeft);
    if (newTicketLeft === 0) {
      $(buttonClicked).text("Sold Out").prop('disabled', 'disabled').addClass('btn-disabled').removeClass('primary-btn btn-buy');
    }
  }

  $('#buy-ticket-modal').modal('hide');

});








