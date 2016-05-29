var posters = [
  {
    poster_url: "img/movie-poster-0.jpg",
    name: "Avengers"
  },
  {
    poster_url: "img/movie-poster-1.jpg",
    name: "Star Wars"
  },
  {
    poster_url: "img/movie-poster-2.jpg",
    name: "Titanic"
  }
];

for (var i = 0; i < posters.length; i++) {
  var currentDiv = $('<div>').appendTo('.posters');
  $('<img>').attr('src', posters[i].poster_url).appendTo(currentDiv);
  $('<h3>').text(posters[i].name).appendTo(currentDiv);
}