$('.btn-buy').click(function(event){
  var newTicketLeft = $(event.target).parent().prev().text() - 1;
  if (newTicketLeft >= 0) {
    $(event.target).parent().prev().text(newTicketLeft);
    if (newTicketLeft === 0) {
      $(event.target).text("Sold Out").prop('disabled', 'disabled').addClass('btn-disabled').removeClass('primary-btn btn-buy');
    }
  }
});