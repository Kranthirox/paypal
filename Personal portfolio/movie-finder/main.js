const API_KEY = "api_key=453f1039d18b66185378b17e5e13c6e2";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const GENRE_URL = BASE_URL + "/genre/movie/list?" + API_KEY;
console.log(GENRE_URL.results);
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

getMovies(API_URL);
function getMovies(url) {
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        showMovies(data.results);
      });
  }, 500);
}
function showMovies(data) {
  data.forEach((movies) => {
    const movieContainer = document.querySelector(".movie-container");

    let post = document.createElement("div");
    post.className = "post";

    let posterContainer = document.createElement("div");
    posterContainer.className = "poster-container";

    let details = document.createElement("div");
    details.className = "desc";
    details.innerHTML = `<h1>${movies.title}</h1> 
  <span class="rating">${movies.vote_average}</span>
   
   <span class="overview">${movies.overview}</span>
   <br>
   `;

    let posterImg = document.createElement("div");
    posterImg.innerHTML = `<img src="${IMG_URL + movies.poster_path}" alt="">`;

    let title = document.createElement("h3");
    title.innerHTML += movies.original_title;

    let rating = document.createElement("p");
    rating.className = "rating";
    rating.innerHTML = "Rating:" + movies.vote_average;

    movieContainer.appendChild(post);
    post.appendChild(posterContainer);
    posterContainer.appendChild(posterImg);
    post.appendChild(details);
  });
}

function find() {
  const searchkey = document.querySelector(".Skey").value;
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = "";
  if (searchkey !== "") {
    getMovies(SEARCH_URL + "&query=" + searchkey);
  } else {
    getMovies(API_URL);
  }

  document.querySelector(".Skey").value = "";
}

var selected = [];
setgenre();
function setgenre() {
  const tagEl = document.querySelector(".tags");
  tagEl.innerHTML = "";
  genres.forEach((cata) => {
    const tagbtn = document.createElement("div");
    tagbtn.classList.add("tag");
    tagbtn.id = cata.id;
    tagbtn.innerHTML = cata.name;
    tagbtn.addEventListener("click", () => {
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = "";
      if (selected.length == 0) {
        selected.push(cata.id);
      } else {
        if (selected.includes(cata.id)) {
          selected.forEach((id, i) => {
            if (id == cata.id) {
              selected.splice(i, 1);
            }
          });
        } else {
          selected.push(cata.id);
        }
      }
      console.log(selected);
      getMovies(API_URL + "&with_genres=" + encodeURI(selected.join(",")));
    });

    tagEl.appendChild(tagbtn);
  });
}
