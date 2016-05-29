var myAppRef = new Firebase("https://webdxd-movies.firebaseio.com/");

var movieRef = new Firebase("https://webdxd-movies.firebaseio.com/movies")

// movieRef.push({
//   name: "Dead Pool",
//   date: "2016/05/01",
//   price: 10,
//   ticketLeft: 21,
//   id: "m3"
// });

// myAppRef.set({movies: movieList});

myAppRef.child("movies").on("value", function(snapshot) {
  var movieList = snapshot.val();

  console.log(movieList);

  $('.data-row').remove();

  for (var key in movieList) {
    var currentTr = $('<tr>').addClass('data-row').attr('id', movieList[key].id).appendTo('.hcenter');
    $('<td>').addClass('movie-name').text(movieList[key].name).appendTo(currentTr);
    $('<td>').text('$' + movieList[key].price).appendTo(currentTr);
    $('<td>').text(movieList[key].date).appendTo(currentTr);
    $('<td>').text(movieList[key].ticketLeft).appendTo(currentTr);
    $('<td>').html('<button class="primary-btn btn-buy" data-toggle="modal" data-target="#buy-ticket-modal">Buy Ticket</button>').appendTo(currentTr);
  }
});



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