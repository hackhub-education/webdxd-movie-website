$('.btn-buy').click(function(event){
  var newTicketLeft = $(event.target).parent().prev().text() - 1;
  $(event.target).parent().prev().text(newTicketLeft);
});