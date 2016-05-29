var movieList = [
  {
    id: "m0",
    name: "Avengers",
    price: 5,
    date: "2015/06/07",
    ticketLeft: 10
  },
  {
    id: "m1",
    name: "Star Wars",
    price: 9,
    date: "2016/04/07",
    ticketLeft: 18
  },
  {
    id: "m2",
    name: "Titanic",
    price: 3,
    date: "1996/06/19",
    ticketLeft: 7
  },
  {
    id: "m3",
    name: "X-men",
    price: 12,
    date: "2016/05/27",
    ticketLeft: 10
  }
];

for (var i = 0; i < movieList.length; i++) {
  var currentTr = $('<tr>').attr('id', movieList[i].id).appendTo('.hcenter');
  $('<td>').addClass('movie-name').text(movieList[i].name).appendTo(currentTr);
  $('<td>').text('$' + movieList[i].price).appendTo(currentTr);
  $('<td>').text(movieList[i].date).appendTo(currentTr);
  $('<td>').text(movieList[i].ticketLeft).appendTo(currentTr);
  $('<td>').html('<button class="primary-btn btn-buy" data-toggle="modal" data-target="#buy-ticket-modal">Buy Ticket</button>').appendTo(currentTr);
}

var buttonClicked;

$('.btn-buy').click(function(event){
  $('input').removeClass('input-invalid');
  $('.text-danger').remove();
  buttonClicked = event.target;
  var movieRow = $(buttonClicked).parent().parent();
  var movieName = movieRow.find('.movie-name').text();
  $('#movie_id').val(movieRow.attr('id'));
  $('#buy-ticket-modal .modal-header').html('<h5>Buy ' + movieName + ' Ticket</h5>');
});

function checkInvalid(user, attribute) {
  if (user[attribute] == "") {
    $('#' + attribute).addClass('input-invalid').after('<p class="text-danger">Please complete ' + attribute + ' field</p>');
    return true;
  } else {
    return false;
  }
}

$('#buy-ticket-btn').click(function(event) {
  var user = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    phone: $('#phone').val(),
    movie_id: $('#movie_id').val()
  };
  $('input').removeClass('input-invalid');
  $('.text-danger').remove();
  if (!checkInvalid(user, 'first_name') 
    && !checkInvalid(user, 'last_name') 
    && !checkInvalid(user, 'phone')) {
    console.log(user);
    var newTicketLeft = $(buttonClicked).parent().prev().text() - 1;
    if (newTicketLeft >= 0) {
      $(buttonClicked).parent().prev().text(newTicketLeft);
      if (newTicketLeft === 0) {
        $(buttonClicked).text("Sold Out").prop('disabled', 'disabled').addClass('btn-disabled').removeClass('primary-btn btn-buy');
      }
    }
    $('#buy-ticket-modal').modal('hide');
    $('input[type="text"]').val("");
  }
});